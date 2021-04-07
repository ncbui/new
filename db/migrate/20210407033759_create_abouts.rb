class CreateAbouts < ActiveRecord::Migration[6.0]
  def change
    create_table :abouts do |t|
      t.string :firstname
      t.string :lastname
      t.string :tagline
      t.string :hobbies

      t.timestamps
    end
  end
end
