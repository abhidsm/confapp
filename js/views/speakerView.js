var SpeakerView = Backbone.View.extend(
    {
	tagName : "li",

	events : {
	    'click li a' : 'showSpeakerDetailsView'
	},

	initialize : function(speaker) {
            this.speaker = speaker;
            this.template = _.template($("#speaker-view-template").html(), this.speaker.toJSON().speaker);
	    this.render();
	},

	render : function(){
	    this.$el.html(this.template);
	    return this;
	},

	showSpeakerDetailsView: function() {
            appRouter.navigate("#speakers/"+this.speaker.get('speaker').cid, {trigger: true});
//	    var speakerDetailsView = new SpeakerDetailsView(this.speaker);
	}
    });
  
