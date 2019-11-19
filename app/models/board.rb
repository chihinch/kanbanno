class Board < ApplicationRecord
  validates :title, :admin_id, presence: true
  validates :archived, inclusion: { in: [true, false] }

  belongs_to :admin,
    class_name: :User,
    primary_key: :id,
    foreign_key: :admin_id

  has_many :lists, dependent: :destroy
  has_many :cards, through: :lists, source: :cards
  has_many :members, through: :board_memberships

  def is_admin?(user)
    user.id == self.admin_id
  end

  def change_archive_status
    self.archived = !self.archived
  end

end