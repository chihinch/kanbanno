class Api::ListsController < ApplicationController
  before_action :obtain_lists

  def obtain_lists
    @lists = List.where(board_id: params[:board_id], archived: false)
  end

  def index
  end

  def create
    list = List.new(list_params)
    list.board_id = params[:board_id]
    if list.save
      # Update the newly created list's prev neighbour if there were lists present beforehand
      if @lists.length > 1
        @lists[-1].updateNeighbours(@lists[-2])
      end
      render :index
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find(params[:id])
    if @list
      if @list.update_attributes(list_params)
        render :index
      else
        render json: @list.errors.full_messages, status: 422
      end
    else
      render json: @list.errors.full_messages, status: 404
    end
  end

  private
  def list_params
    params.require(:list).permit(:title)
  end

end