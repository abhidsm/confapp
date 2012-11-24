var ApplicationView = Backbone.View.extend({
	el: 'body',
	initialize: function() {
		this.gdata = new GDataToJSONConverter();
		this.gdata.getDays(this.render);
	},
	render: function(days) {
		this.conference = new Conference({
			days: days
		});
		this.homePageView = new HomePageView(this.conference);
		$('body').append(this.homePageView.$el);
		$.mobile.changePage(this.homePageView.$el, {changeHash:false});
	}
});