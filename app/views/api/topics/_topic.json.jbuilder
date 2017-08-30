json.extract! topic, :id, :name
json.questionIds { json.array! topic.questions.map(&:id) }
