GDataToJSONConverter = function(){

    this.getInfo = function(data) {
	var info = [];
	for( var l in data.feed.entry )
	{
	    var entry = data.feed.entry[ l ];
	    info.push(entry.gsx$info.$t);
	}
        this.conference.set('info', info);
	return info;
    };

    this.getSpeakers = function(data) {
	for( var l in data.feed.entry )
	{
	    var entry = data.feed.entry[ l ];
	    var speaker = new Speaker({
				          name: entry.gsx$name.$t,
	                                  company: entry.gsx$company.$t,
                                          image: entry.gsx$image.$t,
                                          about: entry.gsx$about.$t,
                                          companyurl: entry.gsx$companyurl.$t,
                                          twitterid: entry.gsx$twitterid.$t
			              });
	    this.conference.get('speakers').add(speaker);
	}
	return this.conference.get('speakers');
    };

    this.getSpeakersForTalk = function(entry, talk) {
        var speakerIds = entry.gsx$speakers.$t.split(",");
        var speakers = [];
        for(var index in speakerIds){
            var speaker = this.speakers.at(parseInt(speakerIds[index])-1);
            speakers.push({speaker: speaker});
        }
        return speakers;
    };

    this.getTalk = function(entry) {
	var talk = new Talk({
			        title: entry.gsx$talks.$t,
			        description: entry.gsx$description.$t,
                                time: entry.gsx$time.$t
		            });
        talk.get('speakers').add(this.getSpeakersForTalk(entry, talk));
	return talk;
    };	

    this.getTalks = function(data) {
	var talks = [];
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
			  title: data.feed.title.$t
		      });

        day.get('talks').add(self.getTalks(data));
	return day;
    };

    this.getDays = function(callback) {

        this.conference = new Conference();

        this.callback = callback;
        this.daysArr = []; 
	this.getSpreadSheetData(googleSpreadSheet.infoSheet[0], this.prepareInfodata);
    };

    this.getSpreadSheetData = function(index, dataCallback){
        this.selfCallback = dataCallback;
        var self = this;
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
            self.conference.get('days').add(self.daysArr);
	    self.callback(self.conference);
        }
    };

    this.prepareInfodata = function(data, index){
        this.info = this.getInfo(data);
	this.getSpreadSheetData(googleSpreadSheet.speakersSheets[0], this.prepareSpeakersdata);
    };
};

$(function(){
      if($.browser.name == 'msie' && $.browser.versionNumber <= 8){
          $.mobile.showPageLoadingMsg( $.mobile.pageLoadErrorMessageTheme, "This Browser is not yet supported", true );
      }else{
          applicationView = new ApplicationView();
      }

      $('div[data-role="page"]').live('pagehide', function () {
                          $(this).remove();
                      });
  });


