var TalkDetailsView = Backbone.View.extend(
    {
	tagName : "div",
	id : 'event',

	events : {
          'click .talk-title a': 'showTalksView'
	},

	initialize : function(talk) {
	    this.talk = talk;
	    this.template = _.template($("#talkdetails-view-template").html(), this.talk.toJSON());
	    this.$el.attr('data-role', 'page');
	    this.render();
	},

	render : function(){
	    this.$el.html(this.template);
            var topBarView = new TopBarView();
            this.$el.prepend(topBarView.$el);
            var self = this;
            this.talk.get('speakers').each(
                function(speaker){
                    var speakerView = new SpeakerView(speaker);
                    self.$el.find('.content-primary ul').append(speakerView.$el);
                });
	    $('body').append(this.$el);
	    $.mobile.changePage(this.$el, {changeHash:false});
	},

	showTalksView: function() {
          appRouter.navigate("#days/"+applicationView.currentDay.cid, {trigger: true});
//          var talkListView = new TalkListView(applicationView.currentDay.get('talks'));
	}
	
    });
