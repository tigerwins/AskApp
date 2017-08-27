class Api::AnswersController < ApplicationController
  def index
    @answers = Answer.where(question_id: params[:question_id])
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.question = Question.find(answer_params[:question_id])
    @answer.author = current_user

    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def show
    @answer = Answer.find(params[:id])
    render :show
  end

  def update
    @answer = Answer.find(params[:id])

    if @answer.author_id == current_user.id && @answer.update(answer_params)
      render :show
    elsif @answer.author_id != current_user.id
      render json: ["Cannot edit other users' answers"], status: 403
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def destroy
    @answer = Answer.find(params[:id])

    if @answer.author_id == current_user.id
      @answer.destroy
      render :show
    else
      render json: ["Cannot delete other users' answers"], status: 403
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:body, :question_id)
  end
end
