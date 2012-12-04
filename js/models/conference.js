define(['jquery', 'underscore', 'backbone', 'models/day', 'models/speaker', 'backbone-relational'], function($, _, Backbone, Day, Speaker){
           var Conference =  Backbone.RelationalModel.extend({

                                                                 relations:[
                                                                     {
                                                                         type: 'HasMany',
                                                                         key: 'days',
                                                                         relatedModel: Day,
                                                                         includeInJSON: false,
                                                                         reverseRelation: {
                                                                             key: 'conference'
                                                                         }
                                                                     },
                                                                     {
                                                                         type: 'HasMany',
                                                                         key: 'speakers',
                                                                         relatedModel: Speaker,
                                                                         includeInJSON: false,
                                                                         reverseRelation: {
                                                                             key: 'conference'
                                                                         }
                                                                     }
                                                                     
                                                                 ]

                                                             });
           return Conference;
       });
