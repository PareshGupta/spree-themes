set :rails_env, fetch(:stage)
set :deploy_to, '/var/www/vinsol_spree_themes'
set :branch, 'master'

server '34.212.158.195', roles: %w( app web db ), user: 'deploy'
