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
        
        prepareData: function(days, speakers){
	    this.currentDay = days.at(0);
            this.conference = new Conference({
			                         days: days,
                                                 speakers: speakers
		                             });
            if(startPage != 'main'){
                appRouter.navigate('main', {trigger: true});
            }else if(Backbone.history.getFragment() == 'main'){
                this.render();
            }
            appRouter.navigate(startPage, {trigger: true});
        }
    });
