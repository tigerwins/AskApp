json.extract! answer, :id, :body, :author_id, :question_id, :num_upvotes, :created_at, :updated_at
json.commentIds { json.array! answer.comments.map(&:id) }
json.upvoteIds { json.array! answer.upvotes.map(&:id) }
