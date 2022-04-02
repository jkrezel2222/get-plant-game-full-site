class CreateTips < ActiveRecord::Migration[6.1]
    def change
      create_table :tips do |t|
        t.string :title
        t.string :image_data
        t.string :description
  
        t.timestamps
      end
    end
  end