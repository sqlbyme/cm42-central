import React from 'react';
import ReactDOM from 'react-dom';
import ProjectSearch from 'components/projects/ProjectSearch';
import ProjectCollection from 'collections/project_collection';

module.exports = function() {
  const projects = {};
  projects.joined = new ProjectCollection();
  projects.unjoined = new ProjectCollection();

  projects.joined.reset($('#my-projects').data('projects'));
  projects.unjoined.reset($('#not-my-projects').data('projects'));

  ReactDOM.render(<ProjectSearch projects={ projects } />, document.getElementById('projects-search'));
}
