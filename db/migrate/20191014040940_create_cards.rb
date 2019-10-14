class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.text :description, default: ''
      t.integer :list_id, null: false
      t.index :list_id
      t.integer :prev_card_id
      t.integer :next_card_id
      t.datetime :due_date
      t.boolean :archived, default: false
      t.timestamps
    end
  end
end
