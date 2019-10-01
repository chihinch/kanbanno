Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] # Users can only create an account for now
    resource :session, only: [:create, :destroy] # A user's session can be created or destroyed
  end
end
