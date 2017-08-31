json.extract! user, :id, :name
json.questionIds { json.array! user.questions.map(&:id) }
json.answerIds { json.array! user.answers.map(&:id) }
json.commentIds { json.array! user.comments.map(&:id) }
json.upvotedAnswers { json.array! user.upvoted_answers.map(&:id) }
