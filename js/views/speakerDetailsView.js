define(['jquery', 'underscore', 'backbone', 'views/topBarView', 'views/talkView', 'text!templates/speaker_details_view.html', 'jqm'], function($, _, Backbone, TopBarView, TalkView, speakerDetailsViewTemplate){
           var SpeakerDetailsView = Backbone.View.extend(
               {
	           tagName : "div",
	           id : 'speaker',

	           events : {
	           },

	           initialize : function(speaker) {
	               this.speaker = speaker;
	               this.template = _.template(speakerDetailsViewTemplate, this.speaker.toJSON());
	               this.$el.attr('data-role', 'page');
	               this.render();
	           },

	           render : function(){
	               this.$el.html(this.template);
                       currentView = this;
                       var topBarView = new TopBarView();
                       this.$el.prepend(topBarView.$el);
                       var self = this;
                       var talks = this.speaker.get('talks');
                       
                       talks.each(
                           function(talk){
                               var talkView = new TalkView(talk.get('talk'), 'speaker-details');
                               self.$el.find('.talks').append($('<ul class="talk"></ul>').append(talkView.$el));
                           });
	               $('body').append(this.$el);
	               $.mobile.changePage(this.$el, {changeHash:false});
	           }	
               });
           return SpeakerDetailsView;
       });
