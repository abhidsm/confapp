var SpeakerView = Backbone.View.extend(
    {
	tagName : "li",

	events : {
	    'click .ui-btn-text' : 'showSpeakerDetailsView'
	},

	initialize : function(speaker) {
            this.speaker = speaker;
            this.template = _.template($("#speaker-view-template").html(), this.speaker.toJSON());
	    this.render();
	},

	render : function(){
	    this.$el.html(this.template);
	    return this;
	},

	showSpeakerDetailsView: function() {
	    var speakerDetailsView = new SpeakerDetailsView(this.speaker);
	}
    });
  
