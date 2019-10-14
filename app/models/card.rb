class Card < ApplicationRecord
  validates :title, presence: true
  validates :archived, inclusion: { in: [true, false] }

  belongs_to :list

   def prev_card
    return Card.new() if !self.prev_card_id
    Card.find(self.prev_card_id)
  end

   def next_card
    return Card.new() if !self.next_card_id
    Card.find(self.next_card_id)
  end
end
