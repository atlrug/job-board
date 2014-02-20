JobBoard::Application.routes.draw do
  match '(*_)' => 'application#index', via: :all
end
