json.answer do
  json.partial! "/api/answers/answer", answer: @answer
end

# do I need users and comments all the way down?
