import React from 'react';
import ReactDOM from 'react-dom';
import ProjectSearch from 'components/projects/ProjectSearch';
import ProjectCollection from 'collections/project_collection';

module.exports = function() {
  const projects = new ProjectCollection();
  const projects_without_user = new ProjectCollection();

  projects.reset($('#my-projects').data('projects'));
  projects_without_user.reset($('#not-my-projects').data('projects'));

  ReactDOM.render(<ProjectSearch projects={ projects } projects_without_user={ projects_without_user } />, document.getElementById('projects-search'));
}
