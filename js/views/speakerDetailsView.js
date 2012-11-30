var SpeakerDetailsView = Backbone.View.extend(
    {
	tagName : "div",
	id : 'speaker',

	events : {
	},

	initialize : function(speaker) {
	    this.speaker = speaker;
	    this.template = _.template($("#speakerdetails-view-template").html(), this.speaker.toJSON());
	    this.$el.attr('data-role', 'page');
	    this.render();
	},

	render : function(){
	    this.$el.html(this.template);
            var topBarView = new TopBarView();
            this.$el.prepend(topBarView.$el);
            var self = this;
            var talkDetails = this.speaker.get('talksDetails');
            
            this.talk.get('speakers').each(
                function(speaker){
                    var speakerView = new SpeakerView(speaker);
                    self.$el.find('.content-primary ul').append(speakerView.$el);
                });
	    $('body').append(this.$el);
	    $.mobile.changePage(this.$el, {changeHash:false});
	}	
    });
