define(['jquery', 'underscore', 'backbone', 'models/day'], function($, _, Backbone, Day){
           var Days = Backbone.Collection.extend({
	                                             model: Day
                                                 });	
           return Days;
       });
