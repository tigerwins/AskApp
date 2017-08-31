class Api::UpvotesController < ApplicationController
  def create
    @upvote = Upvote.new(upvote_params)
    @upvote.user = current_user

    if @upvote.save
      render :show
    else
      render json: @upvote.errors.full_messages, status: 422
    end
  end

  def destroy
    @upvote = Upvote.find_by(
      user_id: params[:user_id],
      answer_id: params[:answer_id]
    )
  end

  private

  def upvote_params
    params.require(:upvote).permit(:answer_id)
  end
end
