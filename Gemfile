ruby "2.4.0"

source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0', '>= 5.0.0.1'

gem 'pg', '0.18.1'
gem 'puma', '~> 3.7'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
gem 'jbuilder', '~> 2.5'

gem 'spree', '~> 3.2.0'
gem 'spree_auth_devise', '~> 3.2.0'
gem 'spree_gateway', '~> 3.2.0'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'capistrano',                  '~> 3.8.0'
  gem 'capistrano-bundler',          '~> 1.2.0'
  gem 'capistrano-passenger',        '~> 0.2.0'
  gem 'capistrano-rails',            '~> 1.2.3'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'vinsol_spree_themes', git: 'https://github.com/vinsol-spree-contrib/spree-themes.git',  branch: 'production'
