class Api::CardsController < ApplicationController

  def obtain_cards
    @cards = Card.where(list_id: params[:list_id], archived: false)
  end

  def index
    obtain_cards()
  end

  def create
    obtain_cards()
    card = List.new(card_params)
    card.list_id = params[:list_id]
    if card.save
      if @cards.length > 1
        card.updateNeighbours(@cards[-2].id)
      end
      obtain_cards()
      render :index
    else
      render json: card.errors.full_messages, status: 422
    end
  end

  def update
    card = List.find(params[:id])
    if card
      if card_params[:prev_card_id] && card_params[:next_card_id]
        card.updateNeighbours(card_params[:prev_card_id], card_params[:next_card_id])
      else
        card.update(card_params)
      end
      obtain_cards()
      render :index
    else
      render json: card.errors.full_messages, status: 404
    end
  end

  private
  def card_params
    params.require(:card).permit(:title, :description, :prev_card_id, :next_card_id)
  end

end