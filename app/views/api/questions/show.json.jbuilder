json.question do
  json.partial! "/api/questions/question", question: @question
end

json.users do
  asker = @question.asker #, :id, :fname, :lname
  answer_authors = @question.answers.map(&:author)
  all_comments = @question.answers.map(&:comments).flatten
  answer_commenters = all_comments.map(&:user).flatten
  # need to flatten the nested array of commenters
  all_users = [asker] + answer_authors + answer_commenters

  all_users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :name
    end
  end
end

json.answers do
  @question.answers.each do |answer|
    json.set! answer.id do
      json.extract! answer, :id, :body, :author_id, :question_id
    end
  end
end

json.comments do
  all_comments = @question.answers.map(&:comments).flatten
  all_comments

end
