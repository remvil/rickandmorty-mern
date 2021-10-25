# rickandmorty-mern
MERN App that consume the public API of Rick &amp; Morty

## Installation
Before install the packages for frontend and backend
```
cd backend
npm i
cd ../client
npm i
```
To start the webserver Nodemon must be installed. If it is not installed, then, run the following from command line
```
npm install -g nodemon
```

## How to Run
Run webserver and client application
```
cd backend
nodemon app
cd ../client
npm start
```

## More details about code
### Libraries
#### Server side
- passport-jwt: It is an authentication middleware for express applications. This module allows to authenticate endpoints using a JSON web token.
#### Client side
- classnames: I've used this package for conditional classNames
- node-sass: I preferred to use sass instead of css
- react-icons: A library that contains different types of icons. Probably a little excessive choice but as soon as I just discovered it and I wanted to try it

## Testing
REST client: I've used rest client plugin on VSCode to test APIs endpoint
