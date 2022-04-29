Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :admins, only: [:create, :show, :index, :current_admin, :logged_in?]
      resources :plants, only: [:create, :index, :show, :update, :destroy]

      post '/login', to: 'auth#login'
      post '/register', to: 'admins#create'
      post '/plants', to: 'plants#create'
      
      
      get '/home', to: 'plants#index'
      get '/singleTip/:id', to: 'plants#show'
      get '/currentAdmin', to: 'admins#current_admin'
      get '/adminAll', to: 'admins#index'


    end
  end
end
