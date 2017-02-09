import React from 'react';

module.exports = function(props) {
  return (
    <div className="col-md-6 project-item">
      <div className="panel panel-default card animated scale-in">
        <div className="panel-heading">
          <a href={ props.project.get('path_to')['project'] } className="card-title">{ props.project.get('name') }</a>

          <div className="icons pull-right">
            <a href={ props.project.get('path_to')['project_reports'] } className="unstyled-link"
              data-toggle="tooltip"
              data-placement="top"
              data-title={ I18n.t('reports') }
            >
              <i className="mi md-20 heading-icon">insert_chart</i>
            </a>

            <a href={ props.project.get('path_to')['project_users'] } className="unstyled-link"
              data-toggle="tooltip"
              data-placement="top"
              data-title={ props.project.get('user')['plural'] }
            >
              <i className="mi md-20 heading-icon">group</i>
            </a>

            <span className="dropdown">
              <a className="unstyled-link" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="mi md-20 heading-icon">settings</i>
              </a>

              <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dLabel">
                <li className="dropdown-header">
                  { I18n.t('options') }
                </li>

                <li>
                  <a href={ props.project.get('path_to')['project_settings'] }
                    data-toggle="tooltip"
                    data-placement="top"
                    data-title={ I18n.t('settings') }
                  >
                    { I18n.t('settings') }
                  </a>
                </li>

                <li className="divider"></li>
                { props.project.get('testq') }
                <li>
                  <a href={ props.project.get('path_to')['project_settings'] }>
                    { I18n.t('projects.unjoin') }
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>

        <div className="panel-body">
          <div className="col-md-6 col-xs-6 counter">
            <span className="counter-description">{ I18n.t('velocity') }</span>
            <span className="counter-value">{ props.project.get('velocity') }</span>
          </div>

          <div className="col-md-6 col-xs-6 counter">
            <span className="counter-description">{ I18n.t('volatility') }</span>
            <span className="counter-value">{ props.project.get('volatility') }</span>
          </div>

          <div className="col-md-12 members">
            <ul className="member-list">
              { props.project.get('users') }
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
