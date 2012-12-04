define(['jquery', 'underscore', 'backbone', 'models/talksBySpeakers', 'models/speaker', 'backbone-relational'], function($, _, Backbone, TalksBySpeakers, Speaker){
           var Talk =  Backbone.RelationalModel.extend({
                                                           
                                                           relations:[
                                                               {
                                                                   type: 'HasMany',
                                                                   key: 'speakers',
                                                                   relatedModel: TalksBySpeakers,
                                                                   includeInJSON: false,
                                                                   reverseRelation: {
                                                                       key: 'talk'
                                                                   }
                                                               }
                                                           ]

                                                       });
           return Talk;
       });
