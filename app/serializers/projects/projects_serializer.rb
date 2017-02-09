class Projects::ProjectsSerializer
  include ActionView::Helpers::NumberHelper
  include ActionView::Helpers::UrlHelper
  include ActionView::Helpers::TextHelper
  include UsersHelper

  attr_accessor :id,
    :name,
    :slug,
    :archived_at,
    :path_to,
    :user,
    :velocity,
    :volatility,
    :users,
    :avatar

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
    },
    self.velocity = attrs.velocity,
    self.volatility = attrs.volatility
    self.users = attrs.users(Project::MAX_MEMBERS_PER_CARD)
  end

  def to_json
    {
      name: name,
      slug: slug,
      path_to: path_to,
      user: user,
      archived_at: archived_at,
      velocity: velocity,
      volatility: volatility,
      users: users
    }
  end

  def self.from_collection(collection)
    collection.map { |item| self.new(item).to_json }
  end
end

