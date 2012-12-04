define(['jquery', 'underscore', 'backbone', 'views/homePageView', 'text!templates/top_bar.html'], function($, _, Backbone, HomePageView, topBarTemplate){
           var TopBarView = Backbone.View.extend(
               {
	           tagName : "div",
                   className : "header", 

	           events : {
                       'click a.home': 'showHomePage',
                       'click a.info': 'showInfoPage',
                       'click a.back': 'showPreviousPage'
	           },

	           initialize : function() {
                       this.template = _.template(topBarTemplate,{});
	               this.$el.attr('data-role', 'header');
	               this.$el.attr('data-theme', 'b');
	               this.render();
	           },

	           render : function(){
	               this.$el.html(this.template);
                       if(currentView.constructor.prototype.id ==  'home'){
                           this.$el.append($('<a href="#" data-icon="info" data-iconpos="notext" class="info"></a>'));
                       }else{
                           this.$el.append($('<a href="#" data-icon="back" data-iconpos="notext" class="back"></a>')); 
                       }
	               return this;
	           },

                   showHomePage: function(){
                       appRouter.navigate("main", {trigger: true});
                   },

                   showInfoPage: function(){
                       appRouter.navigate("info", {trigger: true});
                   },

                   showPreviousPage: function(){
                       history.back();
                   }
               });
           
           return TopBarView;
       });
