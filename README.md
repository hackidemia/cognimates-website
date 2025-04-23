# Cognimates Website 
Built with [Jekyll](https://jekyllrb.com/) and [Github Pages](https://pages.github.com/).

## About Cognimates
Cognimates is a platform that enables kids to learn about AI and programming by creating their own games, stories, and projects. This website serves as the main hub for the Cognimates community and resources.

## Installation

### Prerequisites

Install Ruby via either:
* [Latest stable release](https://www.ruby-lang.org/en/documentation/installation/#package-management-systems) directly
* A Ruby version manager, like [rbenv](https://github.com/rbenv/rbenv#readme)

Install Ruby's Gem bundler (package manager):
```
gem install bundler
```

Download and install project's Gems, listed in `Gemfile`:
```
bundle install
```

## Development

Update dependencies before starting development:
```
bundle install
```

Start the local development server. Opens at `http://127.0.0.1:4000` or `http://localhost:4000`. The server updates the browser whenever code is changed:
```
bundle exec jekyll serve
```

## Deployment

This website is automatically deployed using GitHub Pages when changes are pushed to the `main` branch. The deployment process is managed through GitHub Actions workflow defined in `.github/workflows/jekyll.yml`.

To trigger a new deployment:
1. Make your changes locally and test them
2. Commit your changes and push to the `main` branch
3. GitHub Actions will automatically build and deploy the site
4. The site will be available at [https://cognimates.me](https://cognimates.me)

## Contributing

We welcome contributions to improve the Cognimates website! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Test your changes locally
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to the branch (`git push origin feature/your-feature-name`)
7. Create a new Pull Request

Please ensure your code follows the project's coding standards and includes appropriate documentation.

## License

This project is licensed under the terms of the MIT license.
