class Api::TopicsController < ApplicationController
  def index
    @topics = Topic.all
    render :index
  end

  def create
    @topic = Topic.new(topic_params)

    if @topic.save
      render :show
    else
      render json: @topic.errors.full_messages, status: 422
    end
  end

  def show
    @topic = Topic.find(params[:id])
    render :show
  end

  private

  def topic_params
    params.require(:topic).permit(:name)
  end
end
