class List < ApplicationRecord
  validates :title, presence: true
  validates :archived, inclusion: { in: [true, false] }

  belongs_to :board
  has_many :cards

  def prev_list
    List.find_by(id: self.prev_list_id)
  end

  def next_list
    List.find_by(id: self.next_list_id)
  end

  def updateNeighbours(prev_list = nil, next_list = nil)
    # If prev_list = nil, then we're dealing with the head list
    # If next_list = nil, then we're dealing with the tail list

    if prev_list
      prev_list.next_list_id = self.id
      self.prev_list_id = prev_list.id
    end

    if next_list
      next_list.prev_list_id = self.id
      self.next_list_id = next_list.id
    end

    List.transaction do
      prev_list.save unless prev_list.nil?
      next_list.save unless next_list.nil?
      self.update(self.attributes)
    end
  end
end
