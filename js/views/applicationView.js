var ApplicationView = Backbone.View.extend(
    {
	el: 'body',
	initialize: function() {
            _.bindAll(this, 'prepareData');
	    this.gdata = new GDataToJSONConverter();
	    this.gdata.getDays(this.prepareData);
	},

	render: function() {
	    this.homePageView = new HomePageView(this.conference);
	},
        
        prepareData: function(days){
	    this.currentDay = days.at(0);
            this.conference = new Conference({
			                         days: days
		                             });
            this.render();
        }
    });
