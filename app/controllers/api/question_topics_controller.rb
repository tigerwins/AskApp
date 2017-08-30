class Api::QuestionTopicsController < ApplicationController
  def create
    question_id = params[:question_topic][:question_id]
    topic_name = params[:question_topic][:name]

    topic = Topic.find_or_create_by(name: topic_name)
    @question_topic = QuestionTopic.new
    @question_topic.topic = topic
    @question_topic.question = Question.find(question_id)

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
    params.require(:question_topic).permit(:id, :question_id, :name)
  end
end
