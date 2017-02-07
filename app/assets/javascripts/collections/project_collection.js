import Project from 'models/project';

module.exports = Backbone.Collection.extend({
  model: Project,
  url: '/projects',
});
