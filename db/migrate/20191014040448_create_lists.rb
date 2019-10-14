class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.integer :board_id, null: false
      t.index :board_id
      t.integer :prev_list_id
      t.integer :next_list_id
      t.boolean :archived, null: false, default: false
      t.timestamps
    end
  end
end
