class Api::ListsController < ApplicationController

  def obtain_lists
    @lists = List.where(board_id: params[:board_id], archived: false)
  end

  def index
    obtain_lists()
  end

  def create
    obtain_lists()
    list = List.new(list_params)
    list.board_id = params[:board_id]
    if list.save
      if @lists.length > 1
        list.updateNeighbours(@lists[-2].id)
      end
      obtain_lists()
      render :index
    else
      render json: list.errors.full_messages, status: 422
    end
  end

  def update
    list = List.find(params[:id])
    if list
      if list_params[:prev_list_id] && list_params[:next_list_id]
        list.updateNeighbours(list_params[:prev_list_id], list_params[:next_list_id])
      else
        list.update(list_params)
      end
      @lists = List.where(board_id: list.board_id, archived: false)
      render :index
    else
      render json: list.errors.full_messages, status: 404
    end
  end

  private
  def list_params
    params.require(:list).permit(:title, :prev_list_id, :next_list_id)
  end

end