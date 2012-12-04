define(['jquery', 'underscore', 'backbone', 'models/speaker'], function($, _, Backbone, Speaker){
           var Speakers = Backbone.Collection.extend({
	                                                 model: Speaker
                                                     });	
           return Speakers;
       });
