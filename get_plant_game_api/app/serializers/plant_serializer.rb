class PlantSerializer < ActiveModel::PlantSerializer
    attributes :id, :username, :firstname, :lastname, :title, :description, :image_data, :type
end