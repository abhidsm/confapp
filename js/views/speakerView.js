define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
           var SpeakerView = Backbone.View.extend(
               {
	           tagName : "li",

	           events : {
	               'click a' : 'showSpeakerDetailsView'
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
                       appRouter.navigate("#speakers/"+this.speaker.cid, {trigger: true});
                       //	    var speakerDetailsView = new SpeakerDetailsView(this.speaker);
	           }
               });
           
           return SpeakerView;
       });
