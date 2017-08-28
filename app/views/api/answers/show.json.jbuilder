json.answer do
  json.partial! "/api/answers/answer", answer: @answer
  json.commentIds { json.array! @answer.comments.map(&:id) }
end

user = @answer.author
json.author do
  json.partial! "/api/users/user", user: user
  json.questionIds { json.array! user.questions.map(&:id) }
  json.answerIds { json.array! user.answers.map(&:id) }
  json.commentIds { json.array! user.comments.map(&:id) }
end
