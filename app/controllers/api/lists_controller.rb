class Api::ListsController < ApplicationController 

  def index
    @lists = List.where(board_id: params[:board_id])
  end

  def create
    @list = List.new(list_params)
    @list.board_id = params[:board_id]
    if @list.save
      prevList = @lists.last
      @list.prev_list_id = prevList.id
      prevList.next_list_id = @list.id
      @list.save
      render :index
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  private
  def list_params
    params.require(:list).permit(:title)
  end

end