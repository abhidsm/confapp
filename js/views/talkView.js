define(['jquery', 'underscore', 'backbone', 'text!templates/talk_view.html', 'text!templates/talkbyspeaker_view.html'], function($, _, Backbone, talkViewTemplate, talkBySpeakerViewTemplate){
           var TalkView = Backbone.View.extend(
               {
	           tagName : "li",

	           events : {
	               'click a' : 'showTalkDetails'
	           },

	           initialize : function(talk, from) {
                       this.talk = talk;
                       var htmlTemplate = talkViewTemplate;
                       if(from == 'speaker-details'){
                           htmlTemplate = talkBySpeakerViewTemplate;
                       }
                       this.template = _.template(htmlTemplate, { talk: this.talk });
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
           
           return TalkView;
       });
