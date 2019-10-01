class SessionController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(user)

      # # Once a user has successfully logged in,
      # # redirect to the Boards index page
      # render 'api/boards/index' 
    else
      render json: ['Invalid email and/or password'], status: 422
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