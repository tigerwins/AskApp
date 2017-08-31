json.question_topic do
  json.extract! @question_topic, :id, :question_id, :topic_id
end

json.topic do
  json.partial! "/api/topics/topic", topic: @question_topic.topic
end
