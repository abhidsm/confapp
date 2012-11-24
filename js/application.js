GDataToJSONConverter = function(){

	getSpeakers = function(entry) {
		var speakers = new Speakers();
		var speakerCount = entry.gsx$speakercount.$t;
		for( var i = 1; i <= speakerCount; i++ )
		{
			var key = "gsx$speaker"+i;
			var speaker = new Speaker({
				title: entry[key].$t,	
			});
			speakers.push(speaker);
		}
		return speakers;
	};


	getTalk = function(entry) {
		var talk = new Talk({
			title: entry.gsx$talks.$t,
			description: entry.gsx$description.$t,
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
		var days = new Days();
		for(var index in googleSpreadSheet.sheets) {
			$.getJSON("http://spreadsheets.google.com/feeds/list/" + googleSpreadSheet.key + "/" + googleSpreadSheet.sheets[index] + "/public/values?alt=json-in-script&callback=?", function(data) {
				var day = getDay(data);
				days.push(day);
				if (days.size() == 1) {
					callback(days);
				};
			});
		}
		return days;
	};

};

$(function() {
	applicationView = new ApplicationView();
});


