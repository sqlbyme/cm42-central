import React from 'react';

module.exports = function() {
  return (
    <input
      id="projects_search"
      onBlur={search()}
      placeholder="Search projects"
      className="form-control"
    />
  );
};
