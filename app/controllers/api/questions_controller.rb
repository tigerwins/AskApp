class Api::QuestionsController < ApplicationController
  def index
    @current_user = current_user
    if params[:query]
      search_results = Question.search_questions(params[:query])
      @questions = search_results.to_a
      questions = @questions.map do |question|
        {
          id: question.id,
          body: question.body
        }
      end

      render json: questions
    elsif params[:topicId]
      @questions = Question.joins(:topics).where(
        "question_topics.topic_id = ?", params[:topicId]
      )
      @topic = Topic.find(params[:topicId])

      render :index
    else
      @questions = Question.all
      render :index
    end
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
    @current_user = current_user
    @question = Question.find(params[:id])
    render :show
  end

  def update
    @question = Question.find(params[:id])
    @current_user = current_user

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
