define(['jquery', 'underscore', 'backbone', 'views/applicationView', 'router'], function($, _, Backbone, ApplicationView, AppRouter){
           var Application = function(){
               // Initiate the router
               appRouter = new AppRouter;

               // Start Backbone history a necessary step for bookmarkable URL's
               Backbone.history.start();
               applicationView = new ApplicationView();

               $('div[data-role="page"]').live('pagehide', function () {
                                                   $(this).remove();
                                               });

           };
           return Application;
       });
