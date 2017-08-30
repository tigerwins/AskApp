class Api::SessionsController < ApplicationController
  def create
    user_exists = !!User.find_by(email: params[:user][:email])
    login_type = "email"

    debugger
    if params[:user][:fb_uid]
      @user = User.find_by(fb_uid: params[:user][:fb_uid])
      login_type = "facebook"
    else
      @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
      )
    end

    if user_exists && !@user
      render json: ["Incorrect password"],
        status: 401
    elsif @user
      login(@user)
      render "/api/users/show"
    else
      msg = login_type
      render json: ["No account found for this #{msg}. Retry, or"],
        status: 401
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
