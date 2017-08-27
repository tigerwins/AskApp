class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
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
    params.require(:question).permit(:body)
  end
end
