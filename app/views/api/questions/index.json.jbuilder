json.questions({})
json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! 'question', question: question
      json.answerIds { json.array! question.answers.map(&:id) }
    end
  end
end

newest_answers = []
@questions.each do |question|
  newest_answers << question.answers.last if question.answers.last
end

json.answers({})
json.answers do
  newest_answers.each do |answer|
    json.set! answer.id do
      json.partial! "/api/answers/answer", answer: answer
      json.commentIds { json.array! answer.comments.map(&:id) }
    end
  end
end

first_answer_comments = newest_answers.map(&:comments).flatten
json.comments({})
json.comments do
  first_answer_comments.each do |comment|
    json.set! comment.id do
      json.partial! "/api/comments/comment", comment: comment
    end
  end
end

askers = @questions.map(&:asker)
authors = newest_answers.map(&:author)
commenters = first_answer_comments.map(&:user)
all_users = (askers + authors + commenters).flatten

json.users({})
json.users do
  all_users.each do |user|
    json.set! user.id do
      json.partial! "/api/users/user", user: user
      json.questionIds { json.array! user.questions.map(&:id) }
      json.answerIds { json.array! user.answers.map(&:id) }
      json.commentIds { json.array! user.comments.map(&:id) }
    end
  end
end
