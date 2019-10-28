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

  def updateOrder(prev_list, next_list)
    # debugger
    prev_list.next_list_id = self.id
    self.prev_list_id = prev_list.id

    next_list.prev_list_id = self.id
    self.next_list_id = next_list.id

    List.transaction do
      prev_list.save
      next_list.save
      self.update(self.attributes)
    end
  end
end
