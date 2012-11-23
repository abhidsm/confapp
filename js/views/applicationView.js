var ApplicationView = Backbone.View.extend({
	el: 'body',
	initialize: function() {
		this.homePageView = new HomePageView();
		this.render();
	},
	render: function() {
		this.$el.append(this.homePageView.$el);
	}
});