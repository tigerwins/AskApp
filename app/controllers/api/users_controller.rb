class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def show
  #   @user = User.find(params[:id])
  #   render :show
  # end

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :email, :password)
  end
end
