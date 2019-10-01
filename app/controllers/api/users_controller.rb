class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)

      # # Once a user has successfully created their account and logged in,
      # # redirect to the Boards index page
      # render 'api/boards/index'
    else
      render @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end