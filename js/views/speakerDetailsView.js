define(['jquery', 'underscore', 'backbone', 'views/topBarView', 'views/talkView', 'jqm'], function($, _, Backbone, TopBarView, TalkView){
           var SpeakerDetailsView = Backbone.View.extend(
               {
	           tagName : "div",
	           id : 'speaker',

	           events : {
	           },

	           initialize : function(speaker) {
	               this.speaker = speaker;
	               this.template = _.template($("#speakerdetails-view-template").html(), this.speaker.toJSON());
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
                               var talkView = new TalkView(talk, 'speaker-details');
                               self.$el.find('.talks').append($('<ul class="talk"></ul>').append(talkView.$el));
                           });
	               $('body').append(this.$el);
	               $.mobile.changePage(this.$el, {changeHash:false});
	           }	
               });
           return SpeakerDetailsView;
       });
