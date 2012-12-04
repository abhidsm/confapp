var Speaker =  Backbone.RelationalModel.extend({

   relations:[
      {
          type: 'HasMany',
          key: 'talks',
          relatedModel: 'TalksBySpeakers',
          includeInJSON: false,
          reverseRelation: {
              key: 'speaker'
          }
      }
  ]                            
                 
});
