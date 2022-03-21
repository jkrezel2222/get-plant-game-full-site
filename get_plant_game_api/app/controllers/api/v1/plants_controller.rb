class Api::V1::PlantsController < ApplicationController

    # GET request mapped to /api/v1/plants
    # Keep all CRUD operations here for plants resource
    def index
        @plants = Plant.all
        render json: PlantSerializer.new(plants).to_serialized_json
    end

    # GET request mapped to /api/v1/plants/{plant_id}
    def show

    end

    def new
        @plants = Plant.new
    end

    # POST request mapped to /api/v1/plants
    def create
        @plants = Current.admin.plant.new(plant_params)
        if @plants.save
            redirect_to_root_path, notice: "Thanks for your plant tip!"
        else
            render :new
        end
    end

    # PUT request mapped to /api/v1/plants/{plant_id}
    def update
    end

    # DELETE request mapped to /api/v1/plants/{plant_id}
    def destroy
    end

    
    private

    def plant_params
        params.require(:plant).permit(:title, :description, :image)
    end

end
