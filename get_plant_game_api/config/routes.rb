Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :admins, only: [:create] # make :admin instead?
      resources :plants, only: [:create, :index, :show, :update, :destroy] # make :plant instead?

      post '/login', to: 'auth#login'

    end
  end

  resources :plant

end
