class CommentsController < ApplicationController 

  def obtain_cards
    @cards = Comment.where(card_id: params[:card_id])
  end

  def index
    obtain_cards()
  end

  def create
    @card = Comment.new(comment_params)
    if @card.save
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def update
    @card = Comment.find(params[:id])
    if @card
      if @card.author_id == current_user.id
        @card.update_attribute({body: comment_params[:body]})
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