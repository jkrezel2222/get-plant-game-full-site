class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.belongs_to :admin, null: false, foreign_key: true
      t.string :title
      t.text :image_data
      t.string :description
      t.string :type
      t.references :id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
