define(['jquery', 'underscore', 'backbone', 'models/talk'], function($, _, Backbone, Talk){
           var Talks = Backbone.Collection.extend({
	                                              model: Talk
                                                  });	
           return Talks;
       });
