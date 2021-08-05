Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #get "lists", to: "lists#index"
  #get "lists/new", to: "lists#new"
  #get "lists/:id", to: "lists#show", as: :list
  #post "lists", to: "lists#create"
  root to: 'lists#index'
  resources :lists, only: [:show, :new, :create ] do
    resources :bookmarks, only: [ :new, :create ]
  end
  resources :bookmarks, only: [:destroy]
end
