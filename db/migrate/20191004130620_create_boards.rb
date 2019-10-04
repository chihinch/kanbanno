class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.text :description
      t.integer :admin_id, null: false
      t.boolean :archived, null: false, default: false
      t.index :admin_id
      t.timestamps
    end
  end
end
