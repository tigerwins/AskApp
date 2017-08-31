Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create] #, :show]
    resource :session, only: [:create, :destroy]

    resources :questions, only: [:index, :create, :show, :update] do
      resources :answers, only: [:index, :create]
    end

    resources :answers, only: [:show, :update, :destroy] do
      resources :comments, only: [:index, :create]
    end

    resources :comments, only: [:destroy]
    resources :topics, only: [:index, :create, :show]
    resources :question_topics, only: [:create]
  end

  delete '/api/question_topics/:question_id/:topic_id', to: 'api/question_topics#destroy'
end
