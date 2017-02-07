import React from 'react';
import ReactDom from 'react-dom';
import ProjectCard from 'components/projects/ProjectCard';

export default class ProjectList extends React.Component {
  render() {
    const projects = this.props.projects;

    return(
      <div>
        <div className="col-md-12">
          <h4><i className="mi md-20 heading-icon">view_module</i> { this.props.title } | { projects.length }</h4>
        </div>
        { projects.length != 0 ? (
            projects.map((project) => {
              return <ProjectCard key={ project.get('id') } project={ project } />
            })
          ) : (
            <div className="col-md-12">
              <h4>No results found | <small>Try adjusting your search to find what you're looking for.</small></h4>
            </div>
        )}
      </div>
    );
  }
}
