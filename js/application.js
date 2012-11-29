GDataToJSONConverter = function(){

    getSpeakers = function(entry) {
	var speakers = new Speakers();
	var speakerCount = entry.gsx$speakercount.$t;
	for( var i = 1; i <= speakerCount; i++ )
	{
	    var key = "gsx$speaker"+i;
            var speakerDetails = entry[key].$t;
            if(speakerDetails.length>0){
                var detailsArray = speakerDetails.split(/-{3,}/);
	        var speaker = new Speaker({
				              name: detailsArray[0],
	                                      company: detailsArray[1],
                                              image: detailsArray[2]
			                  });
	        speakers.push(speaker);
            }
	}
	return speakers;
    };


    getTalk = function(entry) {
	var talk = new Talk({
			        title: entry.gsx$talks.$t,
			        description: entry.gsx$description.$t,
                                time: entry.gsx$time.$t,
			        speakers: getSpeakers(entry)
		            });
	return talk;
    };	

    getTalks = function(data) {
	var talks = new Talks();
	for( var l in data.feed.entry )
	{
	    var entry = data.feed.entry[ l ];
	    var talk = getTalk(entry);
	    talks.push(talk);
	}
	return talks;
    };


    getDay = function(data) {
	var self = this;
	day = new Day({
			  title: data.feed.title.$t,
			  talks: self.getTalks(data)
		      });
	return day;
    };

    this.getDays = function(callback) {
	this.days = new Days();
        this.callback = callback;
        this.daysArr = []; 
	for(var index in googleSpreadSheet.sheets) {
	    this.getSpreadSheetData(index);
        }
	return this.days;
    };

    this.getSpreadSheetData = function(index){
        var self = this;
        $.getJSON("http://spreadsheets.google.com/feeds/list/" + googleSpreadSheet.key + "/" + googleSpreadSheet.sheets[index] + "/public/values?alt=json-in-script&callback=?", function(data) {
			  var day = getDay(data);
                          self.daysArr[parseInt(index)] = day;
                          var currentLength = self.daysArr.filter(function(value) { return value !== undefined; }).length;
                          if( currentLength == googleSpreadSheet.sheets.length){
                              self.days.add(self.daysArr);
			      self.callback(self.days);
                          }
		      });
    };
};

$(function() {
      applicationView = new ApplicationView();
  });


