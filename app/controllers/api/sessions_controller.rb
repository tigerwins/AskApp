class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user
      login(user)
      render json: "static_pages/root" # or "api/users/show"?
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    if !current_user
      render json: ["No user signed in"], status: 404
    else
      logout
      render json: {} # or "api/users/show"?
    end
  end
end
