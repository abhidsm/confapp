var HomePageView = Backbone.View.extend({
	tagName : "div",
	className : "home-page",
	initialize : function() {
		this.template = _.template($("#home-page-template").html(),{
			day1: conference.days.first().title
		});
		this.render();
	},
	events : {

	},
	render : function(){
		this.$el.html(this.template);
		return this;
	}	
});