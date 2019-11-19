class CreateBoardMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :board_memberships do |t|
      t.integer :board_id, null: false
      t.integer :member_id, null: false
      t.timestamps
    end
  end
end