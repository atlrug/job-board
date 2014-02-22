JobBoard::Application.routes.draw do
  defaults format: :json do
    resources :jobs, only: [:index]
  end

  defaults format: :html do
    match '(*_)' => 'application#index', via: :all
  end
end
