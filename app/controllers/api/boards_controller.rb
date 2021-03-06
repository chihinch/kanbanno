class Api::BoardsController < ApplicationController
  
  def index
    @boards =  Board.includes(:board_memberships).includes(:members).where(:board_memberships => {member_id: current_user.id})
  end

  def show
    @board = Board.includes(:board_memberships).includes(:members, :lists, :cards).find_by(:board_memberships => {member_id: current_user.id, board_id: params[:id]})
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
      BoardMembership.create(member_id: @board.admin_id, board_id: @board.id)
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def update
    @board = Board.find(params[:id])
    if @board
      if @board.update_attributes(board_params)
        render :show
      else
        render json: @board.errors.full_messages, status: 422
      end
    else
      render json: ['You do not have access to this board.'], status: 401
    end
  end

  def destroy
    @board = Board.find(params[:id])
    if @board.is_admin?(current_user)
      if @board.destroy
        render :show
      else
        render json: ['Something went wrong.'], status: 404
      end
    else
      render json: ['You are not the admin of this board'], status: 401
    end
  end

  private
  def board_params
    params.require(:board).permit(:title, :description)
  end

end