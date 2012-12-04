define(['jquery', 'underscore', 'backbone', 'views/infoView', 'views/talkListView', 'views/talkDetailsView', 'views/speakerDetailsView'], function($, _, Backbone, InfoView, TalkListView, TalkDetailsView, SpeakerDetailsView){
           var AppRouter = Backbone.Router.extend(
               {
                   routes: {
                       "main": "showHomePage",
                       "info": "showInfoPage",
                       "days/:id": "showTalksListView",
                       "talks/:id": "showTalkDetails",
                       "speakers/:id": "showSpeakerDetails"
                   },

                   initialize: function() {
                       return this.bind('all', this._trackPageview);
                   },

                   _trackPageview: function() {
                       var url;
                       url = Backbone.history.getFragment();
                       return _gaq.push(['_trackPageview', "/" + url]);
                   },

                   showHomePage: function(){
                       if (typeof applicationView === 'undefined') {
                           startPage = "main";
                       }else{
                           applicationView.render();
                       }
                   },

                   showInfoPage: function(){
                       if (typeof applicationView === 'undefined') {
                           startPage = "info";
                       }else{
                           var infoView = new InfoView();
                       }
                   },

                   showTalksListView: function(id){
                       if (typeof applicationView === 'undefined') {
                           startPage = "#days/"+id;
                       }else{
                           var day = applicationView.conference.get('days').getByCid(id);
                           var talkListView = new TalkListView(day.get('talks'));
                       }
                   },

                   showTalkDetails: function(id){
                       if (typeof applicationView === 'undefined') {
                           startPage = "#talks/"+id;
                       }else{
                           var talk = undefined;
                           for(var index in googleSpreadSheet.daysSheets){
                               if(talk == undefined){
                                   talk = applicationView.conference.get('days').at(index).get('talks').getByCid(id);
                               }
                           }
	                   var talkDetailsView = new TalkDetailsView(talk);
                       }
                   },

                   showSpeakerDetails: function(id){
                       if (typeof applicationView === 'undefined') {
                           startPage = "#speakers/"+id;
                       }else{
                           var speaker = applicationView.conference.get('speakers').getByCid(id);
	                   var speakerDetailsView = new SpeakerDetailsView(speaker);
                       }
                   }
               });

           return AppRouter;
       });
