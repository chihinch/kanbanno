class BoardMembership < ApplicationRecord
  validates :member_id, :board_id, presence: true
  validates :member_id, uniqueness: {scope: :board_id}

  belongs_to :member,
    class_name: :User,
    primary_key: :id,
    foreign_key: :member_id

  belongs_to :board
end