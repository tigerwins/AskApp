json.comment do
  json.partial! '/api/comments/comment', comment: @comment
end
