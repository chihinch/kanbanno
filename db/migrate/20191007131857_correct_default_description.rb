class CorrectDefaultDescription < ActiveRecord::Migration[5.2]
  def change
    change_column_null :boards, :description, false
    change_column_default :boards, :description, from: nil, to: ""
  end
end
