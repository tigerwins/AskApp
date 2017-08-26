@users.each do |user|
  json.set! user.id do
    json.partial! "api/users/user", user: user
    json.questionIds { json.array! user.questions.map(&:id) }
    json.answerIds { json.array! user.answers.map(&:id) }
    json.commentIds { json.array! user.comments.map(&:id) }
  end
end
