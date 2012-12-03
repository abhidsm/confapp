var HomePageView = Backbone.View.extend(
    {
	tagName : "div",
	id : 'home',
	className : "home-page",

	initialize : function(conference) {
            this.days = conference.get('days');
	    this.template = _.template($("#home-page-template").html(),{days: this.days});
	    this.$el.attr('data-role', 'page');
	    this.render();
	},

	render : function(){
	    this.$el.html(this.template);
            currentView = this;
            var topBarView = new TopBarView();
            this.$el.prepend(topBarView.$el);
            var self = this;
            this.days.each(
                function(day, index){
                    var dayView = new DayView(day);
                    self.$el.find('ul').append(dayView.$el);
                });

	    $('body').append(this.$el);
	    $.mobile.changePage(this.$el, {changeHash:false});
	}	
    });
