json.extract! question, :id, :body, :asker_id, :created_at, :updated_at
json.answerIds { json.array! question.answers.map(&:id) }
json.topicIds { json.array! question.topics.map(&:id) }
