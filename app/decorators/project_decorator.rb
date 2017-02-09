class ProjectDecorator < Draper::Decorator
  delegate_all

  def velocity
    object.iteration_service(since: 4.months.ago).velocity
  end

  def volatility
    h.number_to_percentage(object.iteration_service(since: 4.months.ago).volatility * 100.0, precision: 0)
  end

  def users(amount)
    content = []
    object.users.first(amount).each do |user|
      h.cache "user/#{user.email}/avatar", expires_in: 1.hour do
        content << h.content_tag(:li, user_avatar(user), class: 'member')
      end
    end
    return content
  end

  def user_avatar(user)
    h.tag("img", { src: h.avatar_url(user),
                    data: { toggle: 'tooltip', placement: 'top' },
                    title: user.name,
                    class: 'identicon' }, false, false)
  end
end

