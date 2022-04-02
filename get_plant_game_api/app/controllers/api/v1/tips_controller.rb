class Api::V1::TipsController < ApplicationController

    # GET request mapped to /api/v1/tips
    # Keep all CRUD operations here for plants resource
    def index
        tips = Tip.all
        render json: TipSerializer.new(tips).to_serialized_json
    end

    # GET request mapped to /api/v1/tips/{tip_id}
    def show
        tip = Tip.find_by(id: params[:id])

        if tip
            render json: TipSerializer.new(tip).to_serialized_json
        else
            render status: :not_found
        end
    end

    # POST request mapped to /api/v1/tips
    def create
        tip = Tip.new(tip_params)

        if tip.valid?
            tip.save
            render json: PlantSerializer.new(tip).to_serialized_json, status: :created

        else
            render json: {
                message: 'Failed to create new plant tip',
            },
            status: :unprocessable_entity
        end
    end

    # PUT request mapped to /api/v1/tips/{tip_id}
    def update
        tip = Tip.find(params[:id])

        if tip.valid?
            tip.update(plant_params)
            render json: TipSerializer.new(tip).to_serialized_json, status: :ok

        else
            render json: {
                message: 'Failed to update your plant tip',
            },
            status: :unprocessable_entity
        end
    end

    # DELETE request mapped to /api/v1/plants/{plant_id}
    def destroy
        tip = Tip.find(params[:id])
        tip.destroy
        render status: :ok
    end

    
    private

    def tip_params
        params.require(:tip).permit(:id, :title, :image_data, :description)
    end

end
