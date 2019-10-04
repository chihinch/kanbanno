class Board < ApplicationRecord
  validates :title, :admin_id, :archived, presence: true

  belongs_to :admin,
    class_name: :User,
    primary_key: :id,
    foreign_key: :admin_id

  def is_admin?(user)
    user.id == self.admin_id
  end

  def change_archive_status
    self.archived = !self.archived
  end

end