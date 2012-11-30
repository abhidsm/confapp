GDataToJSONConverter = function(){

    this.getSpeakers = function(data) {
	var speakers = new Speakers();
	for( var l in data.feed.entry )
	{
	    var entry = data.feed.entry[ l ];
	    var speaker = new Speaker({
				          name: entry.gsx$name.$t,
	                                  company: entry.gsx$company.$t,
                                          image: entry.gsx$image.$t,
                                          about: entry.gsx$about.$t,
                                          companyurl: entry.gsx$companyurl.$t,
                                          twitterid: entry.gsx$twitterid.$t,
                                          talks: new Talks()
			              });
	    speakers.push(speaker);
	}
	return speakers;
    };

    this.getSpeakersForTalk = function(entry, talk) {
        var speakerIds = entry.gsx$speakers.$t.split(",");
        var speakers = new Speakers();
        for(var index in speakerIds){
            var speaker = this.speakers.at(parseInt(speakerIds[index])-1);
            speaker.get('talks').push(talk);
            speakers.push(speaker);
        }
        return speakers;
    };

    this.getTalk = function(entry) {
	var talk = new Talk({
			        title: entry.gsx$talks.$t,
			        description: entry.gsx$description.$t,
                                time: entry.gsx$time.$t
		            });
        talk.set('speakers', this.getSpeakersForTalk(entry, talk));
	return talk;
    };	

    this.getTalks = function(data) {
	var talks = new Talks();
	for( var l in data.feed.entry )
	{
	    var entry = data.feed.entry[ l ];
	    var talk = this.getTalk(entry);
	    talks.push(talk);
	}
	return talks;
    };


    this.getDay = function(data) {
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
	this.getSpreadSheetData(googleSpreadSheet.speakersSheets[0], this.prepareSpeakersdata);
        
	return this.days;
    };

    this.getSpreadSheetData = function(index, dataCallback){
        this.selfCallback = dataCallback;
        self = this;
        $.getJSON("http://spreadsheets.google.com/feeds/list/" + googleSpreadSheet.key + "/" + index + "/public/values?alt=json-in-script&callback=?", function(data) {
                      self.selfCallback(data, index);
		  });
    };

    this.prepareSpeakersdata = function(data, index){
        this.speakers = this.getSpeakers(data);
	for(var i in googleSpreadSheet.daysSheets) {
	    this.getSpreadSheetData(googleSpreadSheet.daysSheets[i], this.prepareDaysdata);
        }
    };

    this.prepareDaysdata = function(data, index){
        var self = this;
	var day = this.getDay(data);
        self.daysArr[parseInt(index)] = day;
        var currentLength = self.daysArr.filter(function(value) { return value !== undefined; }).length;
        if( currentLength == googleSpreadSheet.daysSheets.length){
            self.days.add(self.daysArr);
	    self.callback(self.days);
        }
    };

};

$(function() {
      applicationView = new ApplicationView();
  });


