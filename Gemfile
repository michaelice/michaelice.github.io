source "https://rubygems.org"

# GitHub Pages会使用正确的Ruby版本和依赖
gem "github-pages", group: :jekyll_plugins

gem "webrick", "~> 1.7"

# 如果是Windows系统
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# Jekyll插件
group :jekyll_plugins do
  gem "jekyll-feed"
  gem 'jekyll-sitemap'
  gem 'jekyll-gist'
  gem 'jekyll-paginate'
  gem 'jekyll-redirect-from'
end
