# Brevis URL Shortener Client Backend

This folder contains the backend of the Brevis URL Shortener project. It is created using express.js and mongoose.

User inputs a desired original long URL. Backend checks if a shorten URL was generated for the provided long URL. If it was generated before in the past by any user, then it'll return the existing assigned shortened URL. If none was found, then a new shorten URL will be generated and saved to the database.

## Installation

The package manager used for setting up this project is npm.

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# tests
$ npm run test

# build for production and launch server
$ npm install
$ npm start
```

## Configuration
### Environment  Variables
- databaseURL = A MongoDB database connection string.
- shortenURLLength = Integer value representing 1/2 the length of the desired shorten URL string output. Default Value: 3 (produces length 6 characters -> .com/abcdef)

## Author
[Eric Liang](https://www.eric-liang.com)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNUv3](https://choosealicense.com/licenses/gpl-3.0/)