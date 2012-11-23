var Conference = Backbone.Model.extend({
	initialize : function() {
		this.days = new Days();
	}
});