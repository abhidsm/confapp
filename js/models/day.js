define(['jquery', 'underscore', 'backbone', 'models/talk', 'backbone-relational'], function($, _, Backbone, Talk){
           var Day =  Backbone.RelationalModel.extend({

                                                          relations:[
                                                              {
                                                                  type: 'HasMany',
                                                                  key: 'talks',
                                                                  relatedModel: Talk,
                                                                  includeInJSON: false,
                                                                  reverseRelation: {
                                                                      key: 'day'
                                                                  }
                                                              }
                                                          ]

                                                      });
           return Day;
       });
