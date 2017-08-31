json.answer do
  json.partial! "/api/answers/answer", answer: @answer
end

user = @answer.author
json.author do
  json.partial! "/api/users/user", user: user
end
