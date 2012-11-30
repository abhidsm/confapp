var AppRouter = Backbone.Router.extend(
    {
        routes: {
            "main": "showHomePage",
            "days/:id": "showTalksListView",
            "talks/:id": "showTalkDetails",
            "speakers/:id": "showSpeakerDetails"
        },

        showHomePage: function(){
            applicationView.render();
        },

        showTalksListView: function(id){ 
            var day = applicationView.conference.get('days').getByCid(id);
            var talkListView = new TalkListView(day.get('talks'));
        },

        showTalkDetails: function(id){
            var talk = applicationView.currentDay.get('talks').getByCid(id);
	    var talkDetailsView = new TalkDetailsView(talk);
        },

        showSpeakerDetails: function(id){
            var speaker = applicationView.conference.get('speakers').getByCid(id);
	    var speakerDetailsView = new SpeakerDetailsView(speaker);
        }
    });
// Initiate the router
appRouter = new AppRouter;

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

