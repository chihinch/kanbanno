Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]

    resource :session, only: [:create, :destroy] 

    resources :boards, only: [:index, :create, :show, :update, :destroy] do 
      resources :lists, only: [:index, :create]
    end

    resources :lists, only: [:update] do
      resources :cards, only: [:index, :create]
    end

    resources :cards, only: [:show, :update] do
      resources :comments, only: [:index, :create]
    end

    resources :comments, only: [:show, :update, :destroy]

    resources :board_memberships, only: [:create]
    delete '/board_memberships', to: 'board_memberships#destroy'
  end
end
