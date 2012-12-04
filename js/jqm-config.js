define(['jquery'], function($){ 
           //removed this part
           try{
               document.addEventListener("backbutton", function(){
                                             if (window.history.length > 0) {
                                                 window.history.back();
                                                 return false;
                                             }
                                             navigator.app.exitApp();
                                         }, true);
               
           } catch (x) {
               //Error message
           }

           // Since we are using the backbone router we want to disable
           // auto link routing of jquery mobile.
           // The code below for mobileinit
           // notice the last two settings
           $(document).bind("mobileinit", function() {
                                $.mobile.ajaxEnabled = false;
                                $.mobile.hashListeningEnabled = false;
                                $.mobile.pushStateEnabled = false;
                                $.mobile.changePage.defaults.changeHash = false;
                            });

       });
