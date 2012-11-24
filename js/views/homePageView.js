var HomePageView = Backbone.View.extend({
	tagName : "div",
	id : 'home',
	className : "home-page",
	initialize : function(conference) {
		this.template = _.template($("#home-page-template").html(),{
			day1: conference.get('days').first().get('title')
		});
		this.$el.attr('data-role', 'page');
		this.render();
	},
	events : {
		'click .ui-btn-text' : 'some'
	},
	render : function(){
		this.$el.html(this.template);
		return this;
	},
	some: function() {
		alert("hi");
	}	
});