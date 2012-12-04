var Talk =  Backbone.RelationalModel.extend({
                                                
  relations:[
      {
          type: 'HasMany',
          key: 'speakers',
          relatedModel: 'TalksBySpeakers',
          includeInJSON: false,
          reverseRelation: {
              key: 'talk'
          }
      }
  ]

});
