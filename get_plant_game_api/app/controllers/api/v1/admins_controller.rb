class Api::V1::AdminsController < ApplicationController
    skip_before_action :authorized, only: [:create, :index]

    def index
        @admins = Admin.all
        render json: @admins
    end
    
    def create
        @admin = Admin.create(admin_params)

        if @admin.valid?
            @token = encode_token(admin_id: @admin.id)
            render json: { admin: AdminSerializer.new(@admin), jwt: @token }, status: :created

       else
            render json: { error: "Failed to create new user" }, status: :unprocessable_entity       
       end

    end


    private

    def admin_params
        params.permit(:admin, :firstname, :lastname, :username, :password)
    end


end