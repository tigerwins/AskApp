json.comments({})
json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract!
    end
  end
end

json.users({})
json.users do
  @comments.map(&:user).each do |user|
    json.set! user.id do
      json.partial! "/api/users/user", user: user
      json.questionIds { user.questions.map(&:id) }
      json.answerIds { user.answers.map(&:id) }
      json.commentIds { user.comments.map(&:id) }
    end
  end
end
