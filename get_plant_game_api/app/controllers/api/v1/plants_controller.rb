class Api::V1::PlantsController < ApplicationController

    #GET request mapped to /api/v1/houses
    def index
        plants = Plant.all
        render json: PlantSerializer.new(plants).to_serialized_json

    end

    def plant_params
        params.require(:plant).permit(:title, :description, :image)

end
