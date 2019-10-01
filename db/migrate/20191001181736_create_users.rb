class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false, unique: true
      t.index :email
      t.text :password_digest, null: false
      t.text :session_token, null: false, unique: true
      t.index :session_token
      t.timestamps
    end
  end
end
