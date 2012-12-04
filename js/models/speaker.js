define(['jquery', 'underscore', 'backbone', 'models/talksBySpeakers', 'models/talk', 'backbone-relational'], function($, _, Backbone, TalksBySpeakers, Talk){
           var Speaker =  Backbone.RelationalModel.extend({

                                                              relations:[
                                                                  {
                                                                      type: 'HasMany',
                                                                      key: 'talks',
                                                                      relatedModel: TalksBySpeakers,
                                                                      includeInJSON: false,
                                                                      reverseRelation: {
                                                                          key: 'speaker'
                                                                      }
                                                                  }
                                                              ]                            
                                                              
                                                          });
           return Speaker;
       });
