define(['jquery', 'underscore', 'backbone', 'text!templates/speaker_view.html'], function($, _, Backbone, speakerViewTemplate){
           var SpeakerView = Backbone.View.extend(
               {
	           tagName : "li",

	           events : {
	               'click a' : 'showSpeakerDetailsView'
	           },

	           initialize : function(speaker) {
                       this.speaker = speaker;
                       this.template = _.template(speakerViewTemplate, this.speaker.toJSON());
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
