class Api::ListsController < ApplicationController
  before_action :obtain_lists
  
  def obtain_lists
    @lists = List.where(board_id: params[:board_id], archived: false)
  end

  def index
  end

  def create
    @list = List.new(list_params)
    @list.board_id = params[:board_id]
    if @list.save
      # Introduce the newly created list to its neighbours
      @list.updateOrder(@lists[-2], @list.next_list)
      render :index
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    # debugger
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