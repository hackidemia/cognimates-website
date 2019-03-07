## 
Built with [Jekyll](https://jekyllrb.com/) and [Github Pages](https://pages.github.com/).

**First time setup**
`gem install bundler` # 
`gem install jekyll` 



# Cognimates Website 



## Installation

Install Ruby via either
* [ latest stable release](https://www.ruby-lang.org/en/documentation/installation/#package-management-systems) directly
* a Ruby version manager, like [rbenv](https://www.ruby-lang.org/en/documentation/installation/#rbenv) 
https://github.com/rbenv/rbenv#readme


Install Ruby's Gem bundler (ie, package manager)
```
gem install bundler
```

Download and install project's Gems, listed in `Gemfile`

```
bundle install
```




## Development

Download any new Gems added to the project since last time

```
bundle install
```

Start the local development server. Opens at `http://127.0.0.1:4000` aka `http://localhost:4000`. Server updates browser whenever code is changed.

```
bundle exec jekyll serve
```



