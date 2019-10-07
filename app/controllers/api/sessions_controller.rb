class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user.instance_of? User
      login!(@user)
      render :show
    else
      render json: [@user], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ['No one is logged in!'], status: 404
    end
  end

end