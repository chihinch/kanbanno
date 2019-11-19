class BoardMembership < ApplicationRecord do
  validates :member_id, :board_id, presence: true
  validates :member_id, uniqueness: {scope: :board_id}

  belongs_to :user
  belongs_to :board
end