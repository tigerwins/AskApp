json.extract! @question_topic, :id, :question_id, :topic_id

json.topic do
  json.partial! "/api/topics/topic", topic: @question_topic.topic
end
