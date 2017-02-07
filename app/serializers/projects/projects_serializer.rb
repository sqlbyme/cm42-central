class Projects::ProjectsSerializer
  include ActionView::Helpers::NumberHelper
  include ActionView::Helpers::UrlHelper
  include ActionView::Helpers::TextHelper
  include UsersHelper

  attr_accessor :id,
    :name,
    :slug,
    :path_to,
    :user,
    :archived_at

  def initialize(attrs = {})
    self.name = attrs[:name]
    self.slug = attrs[:slug]
    self.archived_at = attrs[:archived_at]
    self.path_to = {
      project: "/projects/#{slug}",
      project_reports: "/projects/#{slug}/reports",
      project_users: "/projects/#{slug}/users",
      project_settings: "/projects/#{slug}/edit"
    }
    self.user = {
      singular: User.model_name.human,
      plural: User.model_name.human(count: 2)
    }
  end

  def to_json
    {
      name: name,
      slug: slug,
      path_to: path_to,
      user: user,
      archived_at: archived_at
    }
  end

  def self.from_collection(collection)
    collection.map { |item| self.new(item).to_json }
  end
end

# self.velocity = attrs.iteration_service(since: 4.months.ago).velocity
# self.volatility = number_to_percentage(
#   attrs.iteration_service(since: 4.months.ago).volatility * 100.0, precision: 0)
