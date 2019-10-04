class Api::BoardsController < ApplicationController
  
  def index
    @boards = currentUser.boards
  end

  def show
    # A board will be selected by its ID (since it should be unique)
    # However the frontend route will still show /boards/:boardID/:title
    @board = Board.find_by(id: params[:id])
  end

  def create
    @board = Board.new(board_params)
    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
    id = params[:id]
    if Board.destroy(id)
      render :index
    else
      render json: ['Something went wrong'], status: 404
    end
  end

  private
  def board_params
    params.require(:board).permit(:title, :description)
  end

end