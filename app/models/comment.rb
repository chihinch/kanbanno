class Comment < ApplicationRecord
  validates :body, :author_id, :card_id, presence: true

  belongs_to :card
end