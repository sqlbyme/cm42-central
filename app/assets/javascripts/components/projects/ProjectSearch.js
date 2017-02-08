import React from 'react';
import ReactDOM from 'react-dom';
import ProjectList from 'components/projects/ProjectList';
import FilterBar from 'components/FilterBar';

export default class ProjectSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible_projects: props.projects,
      visible_projects_without_user: props.projects_without_user,
      search: '',
      filter: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({ search: e.target.value });

    this.testsa();
  }

  searchProject(projects, searchValue, filterValue) {
    const gProjects = projects.filter((project) => {
      return this.findProjectByName(project.get('name'), searchValue);
    });

    console.log(filterValue);

    return this.filterProject(gProjects, filterValue);
  }

  findProjectByName(name, value) {
    return name.toLowerCase().includes(value.toLowerCase());
  }

  handleSearchFilter(e) {
    this.setState({ filter: e.target.value });

    this.testsa();
  }

  filterProject(projects, value) {
    if (value == 'Archived') {
      return projects.filter((project) => {
        return project.get('archived_at') != null;
      });
    } else if (value == 'Not Archived') {
      return projects.filter((project) => {
        return project.get('archived_at') == null;
      });
    }

    return projects;
  }

  testsa() {
    this.setState({
      visible_projects: this.searchProject(this.props.projects, this.state.search, this.state.filter),
      visible_projects_without_user: this.searchProject(this.props.projects_without_user, this.state.search, this.state.filter)
    });
  }

  componentWillUnmount() {
    this.setDefaultFilter('Not Archived');
  }
  setDefaultFilter(value) {
    this.setState({
      visible_projects: this.filterProject(this.props.projects, value),
      visible_projects_without_user: this.filterProject(this.props.projects_without_user, value)
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
                  onChange={(e) => this.handleSearch(e)}
                  placeholder="Search projects"
                />

                <div className="input-group-addon">
                  <select
                    id="project_type"
                    className="unstyled-input"
                    onChange={(e) => this.handleSearchFilter(e)}
                  >
                    <option value="Not Archived">Not Archived</option>
                    <option value="Archived">Archived</option>
                    <option value="All Projects">All Projects</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectList title={ I18n.t('projects.mine') } projects={ this.state.visible_projects } />
        <ProjectList title={ I18n.t('projects.not_member_of') } projects={ this.state.visible_projects_without_user }  />
      </div>
    );
  }
}
