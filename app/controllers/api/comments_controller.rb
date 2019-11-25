class Api::CommentsController < ApplicationController 

  def index
    @comments = Comment.where(card_id: params[:card_id]).order(created_at: :desc)
  end

  def show
    @comment = Comment.find(params[:id])
    if @comment
      render :show
    else
      render json: @comment.errors.full_messages, status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment
      if @comment.author_id == current_user.id
        @comment.update_attribute(:body, comment_params[:body])
        render :show
      else
        render json: ["You are not the author of the comment"], status: 401
      end
    else
      render @comment.errors.full_messages, status: 404
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      if @comment.author_id == current_user.id
        if @comment.destroy
          render :show
        else
          render json: ['Something went wrong.'], status: 404
        end
      else
        render json: ["You are not the author of the comment"], status: 401
      end
    else
      render @comment.errors.full_messages, status: 404
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :card_id, :author_id)
  end
end