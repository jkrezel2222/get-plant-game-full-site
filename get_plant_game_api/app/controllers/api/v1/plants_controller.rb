class Api::V1::PlantsController < ApplicationController
    skip_before_action :authorized, only: [:login, :index]

    # GET request mapped to /api/v1/plants
    # Keep all CRUD operations here for plants resource
    def index
        @plant = Plant.all
        render json: PlantSerializer.new(@plant).to_serialized_json
    end

    # GET request mapped to /api/v1/plants/{plant_id}
    def show
        @plant = Plant.find_by(id: params[:id])

        if @plant
            render json: PlantSerializer.new(@plant).to_serialized_json
        else
            render status: :not_found
        end
    end

    # POST request mapped to /api/v1/plants
    def create
        @plant = Plant.new(plant_params)

        if @plant.valid?
            @plant.save
            render json: PlantSerializer.new(@plant).to_serialized_json, status: :created

        else
            render json: {
                message: 'Failed to create plant tip',
            },
            status: :unprocessable_entity
        end
    end

    # PUT request mapped to /api/v1/plants/{plant_id}
    def update
        @plant = Plant.find(params[:id])

        if @plant.valid?
            @plant.update(plant_params)
            render json: PlantSerializer.new(@plant).to_serialized_json, status: :ok

        else
            render json: {
                message: 'Failed to update plant tip',
            },
            status: :unprocessable_entity
        end
    end

    # DELETE request mapped to /api/v1/plants/{plant_id}
    def destroy
        @plant = Plant.find(params[:id])
        @plant.destroy
        render status: :ok
    end

    
    private

    def plant_params
        params.require(:plant).permit(:title, :image_data, :description)
    end

end
