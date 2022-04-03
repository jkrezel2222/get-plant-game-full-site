class Api::V1::TipsController < ApplicationController

    # GET request mapped to /api/v1/tips
    # Keep all CRUD operations here for plants resource
    before_action :set_tip, only: [:show, :update, :destroy]
    skip_before_action :authorized, only: [:create, :update, :destroy, :index, :show]

    def index
        @tips = Tip.all
        render json: TipSerializer.new(@tips).to_serialized_json, status: 200
    end

    # GET request mapped to /api/v1/tips/{tip_id}
    def show
        @tip = Tip.find_by(id: params[:id])

        if @tip
            render json: TipSerializer.new(@tip).to_serialized_json, status: 200
        else
            render status: :not_found
        end
    end

    # POST request mapped to /api/v1/tips
    def create
        @tip = Tip.new(tip_params)

        if  @tip.valid?
            @tip.save
            render json: @tip, status: :created, location: api_v1_tips_path(@tip)

        else
            render json: @tip.errors, status: :unprocessable_entity
        end
    end

    # PUT request mapped to /api/v1/tips/{tip_id}
    def update
        @tip = Tip.find(params[:id])

        if @tip.valid?
            @tip.update(plant_params)
            render json: TipSerializer.new(@tip).to_serialized_json, status: :ok

        else
            render json: {
                message: 'Failed to update your plant tip',
            },
            status: :unprocessable_entity
        end
    end

    # DELETE request mapped to /api/v1/plants/{plant_id}
    def destroy
        @tip = Tip.find(params[:id])
        @tip.destroy
        render status: :ok
    end

    
    private

    def tip_params
        params.require(:tip).permit(:admin, :title, :image_data, :description)
    end

end
