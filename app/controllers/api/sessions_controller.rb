class Api::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:user][:email])

    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if !@user
      @user = User.find_by(accessToken: params[:user][:accessToken])
    end

    if !user
      render json: ["No account found for this email. Retry, or"], status: 404
    elsif @user
      login(@user)
      render "/api/users/show"
    else
      render json: ["Incorrect password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "/api/users/show"
    else
      render json: ["No user signed in"], status: 404
    end
  end
end
