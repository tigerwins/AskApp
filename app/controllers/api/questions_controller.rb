class Api::QuestionsController < ApplicationController
  def index
    if params[:query]
      search_results = Question.search_questions(params[:query])
      questions = search_results.map do |question|
        return {
          id: question.id,
          body: question.body
        }
      end

      render json: questions
    elsif params[:topicId]
      @questions = Question.joins(:topics)
        .where("question_topics.topic_id = ?", params[:topicId])
    else
      @questions = Question.all
    end

    render :index
  end

  def create
    @question = Question.new(question_params)
    @question.asker = current_user

    if @question.save
      render :show
    else
      render json: @questions.errors.full_messages, status: 422
    end
  end

  def show
    @question = Question.find(params[:id])
    render :show
  end

  def update
    @question = Question.find(params[:id])

    if @question.update(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  private

  def question_params
    params.require(:question).permit(:body, :query, :topicId)
  end
end
