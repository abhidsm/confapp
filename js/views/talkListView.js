define(['jquery', 'underscore', 'backbone', 'views/topBarView', 'views/talkView', 'jqm'], function($, _, Backbone, TopBarView, TalkView){
           var TalkListView = Backbone.View.extend(
               {
	           tagName : "div",
	           id : 'talk-list',

	           initialize : function(talks) {
                       this.talks = talks;
	               this.template = _.template($("#talklist-view-template").html(),{daytitle: applicationView.currentDay.get('title')});
	               this.$el.attr('data-role', 'page');
	               this.render();
	           },

	           render : function(){
	               this.$el.html(this.template);
                       currentView = this;
                       var topBarView = new TopBarView();
                       this.$el.prepend(topBarView.$el);
                       var self = this;
                       this.talks.each(
                           function(talk){
                               var talkView = new TalkView(talk, 'talk-list');
                               self.$el.find('.talks-ul').append(talkView.$el);
                           });
	               $('body').append(this.$el);
	               $.mobile.changePage(this.$el, {changeHash:false});
	           }	
               });
           return TalkListView;
       });
