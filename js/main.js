// This set's up the module paths for underscore and backbone
require.config(
    { 
        'paths': { 
            "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min",
            "jqm": "http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min",
	    "underscore": "lib/underscore", 
	    "backbone": "lib/backbone",
            "text": "lib/text"
        },
	'shim': 
	{
	    backbone: {
		'deps': ['jquery', 'underscore'],
		'exports': 'Backbone'
	    },
	    underscore: {
		'exports': '_'
	    }
	}	
    }); 

require([
	    'application', 'jqm-config'
	], 
	function(Application){
	    var app = new Application();
        });
