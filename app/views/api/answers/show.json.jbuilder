json.answer do
  json.partial! "/api/answers/answer", answer: @answer
  json.commentIds { json.array! @answer.comments.map(&:id) }
end

json.author do
  json.partial! "/api/users/user", user: @answer.author
end

# do I need users and comments all the way down?
