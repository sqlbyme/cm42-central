import React from 'react';

module.exports = function() {
  return (
    <select name="project_type" id="project_type" className="unstyled-input">
      <option value="All Projects">All Projects</option>
      <option value="Not Archived">Not Archived</option>
      <option value="Archived">Archived</option>
    </select>
  );
};

