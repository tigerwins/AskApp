json.partial! "api/users/user", user: @user
# json.questionIds { @user.questions.map(&:id) }
# json.answerIds { json.array! @user.answers.map(&:id) }
# json.commentIds { json.array! @user.comments.map(&:id) }
