json.question do
  json.partial! "/api/questions/question", question: @question
end

question_topics = @question.topics

json.topics({})
json.topics do
  question_topics.each do |topic|
    json.set! topic.id do
      json.partial! "/api/topics/topic", topic: topic
    end
  end
end

asker = @question.asker
answer_authors = @question.answers.map(&:author)
question_comments = @question.answers.map(&:comments).flatten
answer_commenters = question_comments.map(&:user).flatten
all_users = [@current_user, asker] + answer_authors + answer_commenters

json.users({})
json.users do
  all_users.each do |user|
    json.set! user.id do
      json.partial! "/api/users/user", user: user
    end
  end
end

json.answers({})
json.answers do
  @question.answers.each do |answer|
    json.set! answer.id do
      json.partial! "/api/answers/answer", answer: answer
    end
  end
end

upvotes = @question.answers.map(&:upvotes).flatten

json.upvotes({})
json.upvotes do
  upvotes.each do |upvote|
    json.set! upvote.id do
      json.partial! "/api/upvotes/upvote", upvote: upvote
    end
  end
end

question_comments = @question.answers.map(&:comments).flatten

json.comments({})
json.comments do
  question_comments.each do |comment|
    json.set! comment.id do
      json.partial! "/api/comments/comment", comment: comment
    end
  end
end
