define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
           var DayView = Backbone.View.extend(
               {
	           tagName : "li",
                   className: 'day',

	           events : {
	               'click a' : 'showTalksView'
	           },

	           initialize : function(day) {
                       this.day = day;
                       this.template = _.template($("#day-template").html(),{day: this.day});
	               this.render();
	           },

	           render : function(){
	               this.$el.html(this.template);
	               return this;
	           },

	           showTalksView: function() {
	               applicationView.currentDay = this.day;
                       appRouter.navigate("#days/"+this.day.cid, {trigger: true});
                       //            var talkListView = new TalkListView(this.day.get('talks'));
	           }
               });
           return DayView;
       });

