var TalkView = Backbone.View.extend(
    {
	tagName : "li",

	events : {
	    'click .ui-btn-text' : 'showTalkDetails'
	},

	initialize : function(talk) {
            this.talk = talk;
            this.template = _.template($("#talk-view-template").html(), this.talk.toJSON());
	    this.render();
	},

	render : function(){
	    this.$el.html(this.template);
	    return this;
	},

	showTalkDetails: function() {
	    var talkDetailsView = new TalkDetailsView(this.talk);
	}
    });
  
