var TopBarView = Backbone.View.extend(
    {
	tagName : "div",
        className : "header", 

	events : {
            'click a': 'showHomePage'
	},

	initialize : function() {
            this.template = _.template($("#topbar-view-template").html(),{});
	    this.$el.attr('data-role', 'header');
	    this.$el.attr('data-theme', 'b');
	    this.render();
	},

	render : function(){
	    this.$el.html(this.template);
	    return this;
	},

        showHomePage: function(){
            appRouter.navigate("main", {trigger: true});
        }
    });
  
