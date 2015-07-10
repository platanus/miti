# config.rb
require 'uglifier'

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'img'
set :partials_dir, 'partial'
set :haml, { :ugly => true, :format => :html5 }
#activate :minify_html
#activate :livereload
#activate :asset_hash
activate :cache_buster



configure :build do
  activate :minify_javascript
  activate :minify_css
  activate :relative_assets
end


#configure :build do
#  compass_config do |config|
#    config.sass_options = {:debug_info => false}
#    config.sass_options = {:line_comments => false}
#  end
#end

#activate :deploy do |deploy|
#  deploy.method   = :ftp
#  deploy.host     = '75.126.149.8'
#  deploy.path     = '/home/brandbook/webapps/frontend/proyectos/2brains/'
#  deploy.user     = 'frontend'
#  deploy.password = 'fr0nt3nd!'
#end


helpers do
  def is_page_selected(page)
    current_page.url == page ? "current" : ''
  end
end