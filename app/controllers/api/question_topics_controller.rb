class Api::QuestionTopicsController < ApplicationController
  def create
    topic = Topic.find_or_create_by(name: params[:name])
    @question_topic = QuestionTopic.new
    @question_topic.topic = topic
    @question_topic.question = Question.find(params[:question_id])

    if @question_topic.save
      render :show
    else
      render json: @question_topic.errors.full_messages, status: 422
    end
  end

  def destroy
    @question_topic = QuestionTopic.find(params[:id])
    @question_topic.destroy
    render :show
  end

  private

  def question_topic_params
    params.require(:question_topic).permit(:question_id, :name)
  end
end
