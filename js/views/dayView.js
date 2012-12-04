var DayView = Backbone.View.extend(
    {
	tagName : "li",
        className: 'day',

	events : {
	  'click li a' : 'showTalksView'
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
            appRouter.navigate("#days/"+this.day.cid, {trigger: true});
//            var talkListView = new TalkListView(this.day.get('talks'));
	}
    });
  
