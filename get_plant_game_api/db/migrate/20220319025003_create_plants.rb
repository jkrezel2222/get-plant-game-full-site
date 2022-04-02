class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :title
      t.string :image_data
      t.string :description

      t.timestamps
    end
  end
end
