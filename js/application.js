define(['jquery', 'underscore', 'backbone', 'views/applicationView', 'router', 'jqm'], function($, _, Backbone, ApplicationView, AppRouter){
           var Application = function(){
               if($.browser.name == 'msie' && $.browser.versionNumber <= 8){
                   $.mobile.showPageLoadingMsg( $.mobile.pageLoadErrorMessageTheme, "This Browser is not yet supported", true );
               }else{
                   // Initiate the router
                   appRouter = new AppRouter;

                   // Start Backbone history a necessary step for bookmarkable URL's
                   Backbone.history.start();
                   applicationView = new ApplicationView();
               }

               $('div[data-role="page"]').live('pagehide', function () {
                                                   $(this).remove();
                                               });

           };
           return Application;
       });
