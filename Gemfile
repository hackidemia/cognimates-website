source "https://rubygems.org"

# Remove Ruby version constraint to allow any Ruby version

# Use Jekyll 4 which is compatible with Ruby 3.3
gem "jekyll", "~> 4.3.2"

# Supporting gems
gem "nokogiri", ">= 1.16.0"
gem "ffi", ">= 1.15.5"
gem "webrick"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-redirect-from"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
