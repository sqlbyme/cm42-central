import React from 'react';
import ReactDOM from 'react-dom';
import Project from 'models/project';
import ProjectList from 'components/projects/ProjectList';

export default class ProjectSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleProjects: {
        joined: props.projects.joined,
        unjoined: props.projects.unjoined
      }
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  filterProjects(projects, searchValue, filterValue) {
    const projectsFiltered = projects.findByName(searchValue);

    if (filterValue == 'archived') {
      return projectsFiltered.archived();
    } else if (filterValue == 'not_archived') {
      return projectsFiltered.notArchived();
    }

    return projectsFiltered;
  }

  handleSearch() {
    const projectsSearch = this.refs.projectsSearch.value;
    const projectsFilter = this.refs.projectsFilter.value;
    this.setState({
      visibleProjects: {
        joined: this.filterProjects(this.props.projects.joined, projectsSearch, projectsFilter),
        unjoined: this.filterProjects(this.props.projects.unjoined, projectsSearch, projectsFilter)
      }
    });
  }

  filterOptions() {
    return Project.filters.map(function(filter) {
      return(<option key={ filter } value={ filter }>{ I18n.t(filter) }</option>);
    })
  }

  render() {
    return(
      <div>
        <div className="col-md-12">
          <div id="form_search" className="search-projects">
            <div className="form-group col-md-12">
              <div className="input-group">
                <div className="input-group-addon"><i className="mi md-20 heading-icon">search</i></div>
                <input
                  id="projects_search"
                  className="form-control"
                  onChange={this.handleSearch}
                  ref="projectsSearch"
                  placeholder="Search projects"
                />

                <div className="input-group-addon">
                  <select
                    id="project_type"
                    className="unstyled-input"
                    onChange={this.handleSearch}
                    ref="projectsFilter"
                  >
                  { this.filterOptions() }
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectList title={ I18n.t('projects.mine') } projects={ this.state.visibleProjects.joined } />
        <ProjectList title={ I18n.t('projects.not_member_of') } projects={ this.state.visibleProjects.unjoined } />
      </div>
    );
  }
}
