class CommentsController < ApplicationController 

  def index
    @comments = Comment.where(card_id: params[:card_id])
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
    @card = Comment.find(params[:id])
    if @card
      if @card.author_id == current_user.id
        @card.update_attribute({body: comment_params[:body]})
        render :show
      else
        render json: ["You are not the author of the card"], status: 401
      end
    else
      render @card.errors.full_messages, status: 404
    end
  end

  def destroy
    @card = Comment.find(params[:id])
    if @card
      if @card.author_id == current_user.id
        if @card.destroy
          render :show
        else
          render json: ['Something went wrong.'], status: 404
        end
      else
        render json: ["You are not the author of the card"], status: 401
      end
    else
      render @card.errors.full_messages, status: 404
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :card_id, :author_id)
  end
end