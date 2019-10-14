class List < ApplicationRecord
  validates :title, presence: true
  validates :archived, inclusion: { in: [true, false] }

  belongs_to :board
  has_many :cards

  def prev_list
    return List.new() if !self.prev_list_id
    List.find(self.prev_list_id)
  end

  def next_list
    return List.new() if !self.next_list_id
    List.find(self.next_list_id)
  end
end
