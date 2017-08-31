json.topics do
  json.array! @topics do |topic|
    json.partial! "/api/topics/topic", topic: topic
  end
end
