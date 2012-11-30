var AppRouter = Backbone.Router.extend(
    {
        routes: {
            "home": "showHomePage",
            "days/:index": "showTalksListView"
        },

        showHomePage: function(){
            applicationView.render();
        },

        showTalksListView: function(){
            
        }
    });
// Initiate the router
appRouter = new AppRouter;

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

