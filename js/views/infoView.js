var InfoView = Backbone.View.extend(
    {
	tagName : "div",
	id : 'info',

	events : {
	},

	initialize : function(speaker) {
	  this.template = _.template($("#info-view-template").html(), {info: applicationView.conference.get('info')});
	    this.$el.attr('data-role', 'page');
	    this.render();
	},

	render : function(){
	    this.$el.html(this.template);
            var topBarView = new TopBarView();
            this.$el.prepend(topBarView.$el);
	    $('body').append(this.$el);
	    $.mobile.changePage(this.$el, {changeHash:false});
	}	
    });
