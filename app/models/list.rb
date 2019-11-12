class List < ApplicationRecord
  validates :title, presence: true
  validates :archived, inclusion: { in: [true, false] }

  belongs_to :board
  has_many :cards, dependent: :destroy

  def prev_list
    # return List.new() unless self.prev_list_id
    List.find_by(id: self.prev_list_id)
  end

  def next_list
    List.find_by(id: self.next_list_id)
  end

  def updateNeighbours(prev_list_id = nil, next_list_id = nil)

    old_prev_list = self.prev_list
    old_next_list = self.next_list

    new_prev_list = List.find_by(id: prev_list_id)
    new_next_list = List.find_by(id: next_list_id)
    
    # Introduce the new neighbours to this list
    new_prev_list.next_list_id = self.id unless new_prev_list.nil?
    new_next_list.prev_list_id = self.id unless new_next_list.nil?
    
    # Change the neighbours for this list
    self.prev_list_id = prev_list_id
    self.next_list_id = next_list_id

    # And update the old neighbours
    if !old_prev_list.nil? # 
      if !old_next_list.nil? # Left+ Right+
        old_prev_list.next_list_id = old_next_list.id
        old_next_list.prev_list_id = old_prev_list.id
      else # Left+ Right-
        old_prev_list.next_list_id = nil
      end
    else # This list did not have a left neighbour
      if !old_next_list.nil? # Left- Right+
        old_next_list.prev_list_id = nil
      end
    end

    List.transaction do
      old_prev_list.save unless old_prev_list.nil?
      old_next_list.save unless old_next_list.nil?
      new_prev_list.save unless new_prev_list.nil?
      new_next_list.save unless new_next_list.nil?
      self.save
    end
  end
end
