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

## Extra
### Libraries
- passport-jwt: Is an authentication middleware for express applications. This module lets authenticate endpoints using a JSON web token. It is intended to be used to secure RESTful endpoints without sessions.