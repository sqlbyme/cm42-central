import Project from 'models/project';

module.exports = Backbone.Collection.extend({
  model: Project,
  url: '/projects',

  archived() {
    return new this.constructor(
      this.filter((project) => project.get('archived_at'))
    );
  },

  notArchived() {
    return new this.constructor(
      this.filter((project) => !project.get('archived_at'))
    );
  },

  findByName(name) {
    return new this.constructor(
      this.filter((project) => project.get('name').toLowerCase().indexOf(name.toLowerCase()) != -1)
    );
  }
});
