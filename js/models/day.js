var Day =  Backbone.RelationalModel.extend({

  relations:[
      {
          type: 'HasMany',
          key: 'talks',
          relatedModel: 'Talk',
          includeInJSON: false,
          reverseRelation: {
              key: 'day'
          }
      }
  ]

});
