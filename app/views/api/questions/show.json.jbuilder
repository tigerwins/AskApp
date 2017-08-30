json.question do
  json.partial! "/api/questions/question", question: @question
  json.answerIds { json.array! @question.answers.map(&:id) }
  json.topicIds { json.array! question.topics.map(&:id) }
end

all_topics = @question.map(&:topics)
json.topics({})
json.topics do
  all_topics.each do |topic|
    json.partial! "/api/topics/topic", topic: topic
    json.questionIds { json.array! topic.questions.map(&:id) }
  end
end

json.users({})
json.users do
  asker = @question.asker
  answer_authors = @question.answers.map(&:author)
  all_comments = @question.answers.map(&:comments).flatten
  answer_commenters = all_comments.map(&:user).flatten
  all_users = [asker] + answer_authors + answer_commenters

  all_users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :name
      json.questionIds { json.array! user.questions.map(&:id) }
      json.answerIds { json.array! user.answers.map(&:id) }
      json.commentIds { json.array! user.comments.map(&:id) }
    end
  end
end

json.answers({})
json.answers do
  @question.answers.each do |answer|
    json.set! answer.id do
      json.partial! "/api/answers/answer", answer: answer
      json.commentIds { json.array! answer.comments.map(&:id) }
    end
  end
end

json.comments({})
json.comments do
  all_comments = @question.answers.map(&:comments).flatten
  all_comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :user_id, :created_at
    end
  end
end
