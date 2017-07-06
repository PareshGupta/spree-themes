set :rails_env, fetch(:stage)
set :deploy_to, '/var/www/vinsol_spree_themes'
set :branch, 'f-deploy'

server '35.163.245.199', roles: %w( app web db ), user: 'deploy'
