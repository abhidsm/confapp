var ApplicationView = Backbone.View.extend(
    {
	el: 'body',
	initialize: function() {
            _.bindAll(this, 'prepareData');
	    this.gdata = new GDataToJSONConverter();
	    this.gdata.getDays(this.prepareData);
            return this;
	},

	render: function() {
	    this.homePageView = new HomePageView(this.conference);
	},
        
        prepareData: function(conference){
            this.conference = conference;

            if(startPage != 'main'){
                appRouter.navigate('main', {trigger: true});
            }else if(Backbone.history.getFragment() == 'main'){
                this.render();
            }
            appRouter.navigate(startPage, {trigger: true});
        }
    });
