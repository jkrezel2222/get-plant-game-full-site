class ApplicationController < ActionController::API
    before_action :authorized

    def encode_token(payload)
        JWT.encode(payload, '856f234gf3g')
    end

    def auth_header
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
            token = auth_header.split(' ')[1]

            begin
                JWT.decode(token, '856f234gf3g', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil                
            end
        end


        def current_admin
            if decoded_token
                admin_id = decoded_token[0]['admin_id']
                @admin = Admin.find_by(id: admin_id)
            end
        end

        def logged_in?
            !!current_admin
        end

        def authorized
            unless logged_in?
                render json: { message: 'You must log in' }, status: :unauthorized
            end
        end

end
