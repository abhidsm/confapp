var DayView = Backbone.View.extend(
    {
	tagName : "li",

	events : {
	    'click .ui-btn-text' : 'showTalksView'
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
	    var talkListView = new TalkListView(this.day.get('talks'));
	}
    });
  
