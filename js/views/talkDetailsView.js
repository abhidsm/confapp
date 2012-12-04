define(['jquery', 'underscore', 'backbone', 'views/topBarView', 'views/speakerView', 'text!templates/talk_details_view.html', 'jqm'], function($, _, Backbone, TopBarView, SpeakerView, talkDetailsViewTemplate){
           var TalkDetailsView = Backbone.View.extend(
               {
	           tagName : "div",
	           id : 'event',

	           events : {
	           },

	           initialize : function(talk) {
	               this.talk = talk;
	               this.template = _.template(talkDetailsViewTemplate, this.talk.toJSON());
	               this.$el.attr('data-role', 'page');
	               this.render();
	           },

	           render : function(){
	               this.$el.html(this.template);
                       currentView = this;
                       var topBarView = new TopBarView();
                       this.$el.prepend(topBarView.$el);
                       var self = this;
                       this.talk.get('speakers').each(
                           function(speaker){
                               var speakerView = new SpeakerView(speaker);
                               self.$el.find('.content-primary ul').append(speakerView.$el);
                           });
	               $('body').append(this.$el);
	               $.mobile.changePage(this.$el, {changeHash:false});
	           }
	           
               });
           return TalkDetailsView;
       });
