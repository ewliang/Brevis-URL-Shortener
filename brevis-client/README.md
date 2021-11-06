# Brevis URL Shortener Client Frontend

This folder contains the frontend client of the Brevis URL Shortener project. It is created using Nuxt.js to take advantage of its embedded routing and SEO benefits.

User inputs a desired original long URL. Backend checks if a shorten URL was generated for the provided long URL. If it was generated before in the past by any user, then it'll return the existing assigned shortened URL. If none was found, then a new shorten URL will be generated and saved to the database.

## Installation

The package manager used for setting up this project is npm.

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start
```

## Author
[Eric Liang](https://www.eric-liang.com)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNUv3](https://choosealicense.com/licenses/gpl-3.0/)