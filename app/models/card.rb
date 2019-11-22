class Card < ApplicationRecord
  validates :title, presence: true
  validates :archived, inclusion: { in: [true, false] }

  belongs_to :list
  has_many :comments

  def prev_card
    Card.find_by(id: self.prev_card_id)
  end

  def next_card
    Card.find_by(id: self.next_card_id)
  end

  def updateNeighbours(prev_card_id = nil, next_card_id = nil)

    old_prev_card = self.prev_card
    old_next_card = self.next_card

    new_prev_card = Card.find_by(id: prev_card_id)
    new_next_card = Card.find_by(id: next_card_id)

    # Introduce the new neighbours to this card
    new_prev_card.next_card_id = self.id unless new_prev_card.nil?
    new_next_card.prev_card_id = self.id unless new_next_card.nil?

    # Change the neighbours for this card
    self.prev_card_id = prev_card_id
    self.next_card_id = next_card_id

    # And update the old neighbours
    if !old_prev_card.nil? 
      if !old_next_card.nil? # Left+ Right+
        old_prev_card.next_card_id = old_next_card.id
        old_next_card.prev_card_id = old_prev_card.id
      else # Left+ Right-
        old_prev_card.next_card_id = nil
      end
    else
      if !old_next_card.nil? # Left- Right+
        old_next_card.prev_card_id = nil
      end
    end

    Card.transaction do
      old_prev_card.save unless old_prev_card.nil?
      old_next_card.save unless old_next_card.nil?
      new_prev_card.save unless new_prev_card.nil?
      new_next_card.save unless new_next_card.nil?
      self.save
    end
  end
end
