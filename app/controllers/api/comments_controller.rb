class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(answer_id: params[:answer_id])
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user = current_user

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.user_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ["Cannot delete other users' comments"], status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :answer_id)
  end
end
