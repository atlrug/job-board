if defined?(Konacha)
  require 'capybara/poltergeist'

  Konacha.configure do |config|
    config.spec_dir     = 'spec/javascripts'
    config.spec_matcher = /_spec\.js/
    config.driver       = :poltergeist
    config.stylesheets  = %w(application)
  end
end
