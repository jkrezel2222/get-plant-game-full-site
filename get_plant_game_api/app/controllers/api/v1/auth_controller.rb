class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized, only: [:login]
    
    def login
        @admin = Admin.find_by(username: admin_login_params[:username])

        if @admin && @admin.authenticate(admin_login_params[:password])
            token = encode_token({ admin_id: @admin.id })

            render json: {
                        admin: AdminSerializer.new(@admin),
                        jwt: token,
                    },
                    status: :accepted

                else
                    render json: {
                        message: 'Invalid username or password',
                    },
                    status: :unauthorized
        
        end

    end
    

    # new login code added here

    # def token_authenticate
    #     token = request.headers["Authenticate"]
    #     @admin = Admin.find(decode(token)["admin_id"])

    #     render json: @admin
    # end




    private

    def admin_login_params
        params.permit(:admin, :username, :password)
    end

end