class List < ApplicationRecord
  validates :title, presence: true
  validates :archived, inclusion: { in: [true, false] }

  belongs_to :board
  has_many :cards, dependent: :destroy

  def prev_list
    List.find_by(id: self.prev_list_id)
  end

  def next_list
    List.find_by(id: self.next_list_id)
  end

  def updateNeighbours(prev_list_id = nil, next_list_id = nil)

    new_prev_list = List.find_by(id: prev_list_id)
    new_next_list = List.find_by(id: next_list_id)
    
    # Introduce the new neighbours to this list
    new_prev_list.next_list_id = self.id unless new_prev_list.nil?
    new_next_list.prev_list_id = self.id unless new_next_list.nil?
    
    # Change the neighbours for this list
    self.prev_list_id = prev_list_id
    self.next_list_id = next_list_id

    List.transaction do
      new_prev_list.save unless new_prev_list.nil?
      new_next_list.save unless new_next_list.nil?
      self.save
    end
  end
end
