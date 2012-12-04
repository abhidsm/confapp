define(['jquery', 'underscore', 'backbone', 'views/topBarView', 'text!templates/info_view.html', 'jqm'], function($, _, Backbone, TopBarView, infoViewTemplate){
           var InfoView = Backbone.View.extend(
               {
	           tagName : "div",
	           id : 'info',

	           events : {
	           },

	           initialize : function(speaker) {
	               this.template = _.template(infoViewTemplate, {info: applicationView.conference.get('info')});
	               this.$el.attr('data-role', 'page');
	               this.render();
	           },

	           render : function(){
	               this.$el.html(this.template);
                       currentView = this;
                       var topBarView = new TopBarView();
                       this.$el.prepend(topBarView.$el);
	               $('body').append(this.$el);
	               $.mobile.changePage(this.$el, {changeHash:false});
	           }	
               });
           return InfoView;
       });
