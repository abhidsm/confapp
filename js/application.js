$(function() {

	conference = new Conference({
		days: getDays()
	});
});


getDays = function() {
	for(var index in googleSpreadSheet.sheets) {
		$.getJSON("http://spreadsheets.google.com/feeds/list/" + googleSpreadSheet.key + "/" + googleSpreadSheet.sheets[index] + "/public/values?alt=json-in-script&callback=?", function(data) {
			
		});
	}
};

getDay = function(data) {
	day = new Day({
		title: data.feed.title.$t
	});
	return day;
}

getSpreadSheetData = function() {
	var days = new Days();

	
	console.log(days);
	return days;

};
