 var TalkDetailsView = Backbone.View.extend({
	tagName : "div",
	id : 'event',
	initialize : function(conference) {
		this.conference = conference;
		this.template = _.template($("#event-page-template").html(),{
			day1: this.conference.get('days').first().get('title')
		});
		this.$el.attr('data-role', 'page');
		this.render();
	},
	events : {
		'click .ui-btn-text' : 'some'
	},
	render : function(){
		this.$el.html(this.template);
		$('body').append(this.$el);
		$.mobile.changePage(this.$el, {changeHash:false});
	},
	some: function() {
		this.homePageView = new HomePageView(this.conference);
		$('body').append(this.homePageView.$el);
		$.mobile.changePage(this.homePageView.$el, {changeHash:false});
	}	
});
