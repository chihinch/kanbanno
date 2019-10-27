class Api::BoardsController < ApplicationController
  
  def index
    # debugger
    @boards = current_user.boards
    # @boards = Board.where(admin_id: current_user.id)
  end

  def show
    @board = Board.find_by(id: params[:id])
    # debugger
    # if @board && @board.is_admin?(current_user)
    if @board
      render :show
    else
      render json: ['You do not have access to this board.'], status: 403
    end
  end

  def create
    @board = Board.new(board_params)
    @board.admin_id = current_user.id
    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def update
    debugger
    @board = current_user.boards.find(params[:id])
    if @board
      if @board.update_attributes(board_params)
        render :show
      else
        render json: @board.errors.full_messages, status: 422
      end
    else
      render json: ['You do not have access to this board.'], status: 403
    end
  end

  def destroy
    @board = Board.find(params[:id])
    if @board.is_admin?(current_user)
      if Board.destroy(@board.id)
        render :show # return the show jbuilder so that the reducer can use its id to remove it
        # it's up to the frontend to redirect the user to the boards index
      else
        render json: ['Something went wrong.'], status: 404
      end
    else
      render json: ['You are not the admin of this board'], status: 403
    end
  end

  private
  def board_params
    params.require(:board).permit(:title, :description)
  end

end