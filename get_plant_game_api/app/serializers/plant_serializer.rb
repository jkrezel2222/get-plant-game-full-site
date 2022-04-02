class PlantSerializer < ActiveModel::Serializer
    
    def initialize(plant_object)
        @plant = plant_object
    end

    def to_serialized_json
        @plant.as_json
    end
end