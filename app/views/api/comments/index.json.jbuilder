json.comments({})
json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.partial! "/api/comments/comment", comment: comment
    end
  end
end

json.users({})
json.users do
  @comments.map(&:user).each do |user|
    json.set! user.id do
      json.partial! "/api/users/user", user: user
    end
  end
end
