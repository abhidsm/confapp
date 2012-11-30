var TalkListView = Backbone.View.extend(
    {
	tagName : "div",
	id : 'talk-list',

	initialize : function(talks) {
            this.talks = talks;
	    this.template = _.template($("#talklist-view-template").html(),{});
	    this.$el.attr('data-role', 'page');
	    this.render();
	},

	render : function(){
	    this.$el.html(this.template);
            var topBarView = new TopBarView();
            this.$el.prepend(topBarView.$el);
            var self = this;
            this.talks.each(
                function(talk){
                    var talkView = new TalkView(talk, 'talk-list');
                    self.$el.find('ul').append(talkView.$el);
                });
	    $('body').append(this.$el);
	    $.mobile.changePage(this.$el, {changeHash:false});
	}	
    });
