var Conference =  Backbone.RelationalModel.extend({

  relations:[
      {
          type: 'HasMany',
          key: 'days',
          relatedModel: 'Day',
          includeInJSON: false,
          reverseRelation: {
              key: 'conference'
          }
      },
      {
          type: 'HasMany',
          key: 'speakers',
          relatedModel: 'Speaker',
          includeInJSON: false,
          reverseRelation: {
              key: 'conference'
          }
      }
      
  ]

});
