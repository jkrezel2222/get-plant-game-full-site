Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :admins, only: [:create]
      resources :plants, only: [:create, :index, :show, :update, :destroy]

      post '/login', to: 'auth#login'

    end
  end
end
