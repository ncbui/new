class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :site
      t.string :url
      t.string :icon

      t.timestamps
    end
  end
end
