// This set's up the module paths for underscore and backbone
require.config(
    { 
        'paths': { 
            "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min",
            "jqm": "http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min",
	    "underscore": "lib/underscore", 
	    "backbone": "lib/backbone",
            "text": "lib/text",
            "reject": "lib/jquery.reject.min"
        },
	'shim': 
	{
	    backbone: {
		'deps': ['jquery', 'underscore'],
		'exports': 'Backbone'
	    },
	    underscore: {
		'exports': '_'
	    },
	    reject: {
		'deps': ['jquery']
	    },
	    jqm: {
		'deps': ['jqm-config']
	    }
	}	
    }); 

require([
	    'application', 'reject', 'jqm'
	], 
	function(Application){
            if($.browser.name == 'msie' && $.browser.versionNumber <= 8){
                $.mobile.showPageLoadingMsg( $.mobile.pageLoadErrorMessageTheme, "This Browser is not yet supported", true );
            }else{
	        var app = new Application();
            }
        });
