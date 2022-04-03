class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :title
      t.string :image_data
      t.string :description
      t.integer :admin_id

      t.timestamps
    end
  end
end
