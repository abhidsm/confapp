var TalkView = Backbone.View.extend(
    {
	tagName : "li",

	events : {
	    'click a' : 'showTalkDetails'
	},

	initialize : function(talk, from) {
            this.talk = talk;
            var templateName = "#talk-view-template";
            if(from == 'speaker-details'){
                templateName = "#talkbyspeaker-view-template";
            }
          this.template = _.template($(templateName).html(), { talk: this.talk });
	    this.render();
	},

	render : function(){
	    this.$el.html(this.template);
	    return this;
	},

	showTalkDetails: function() {
            appRouter.navigate("#talks/"+this.talk.cid, {trigger: true});
//	    var talkDetailsView = new TalkDetailsView(this.talk);
	}
    });
  
