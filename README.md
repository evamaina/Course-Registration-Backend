[![Build Status](https://travis-ci.org/evamaina/ExpressApp.svg?branch=master)](https://travis-ci.org/evamaina/ExpressApp)

[![Coverage Status](https://coveralls.io/repos/github/evamaina/ExpressApp/badge.svg)](https://coveralls.io/github/evamaina/ExpressApp)

# ExpressApp

NodeJs Express RESTful API
Ensure you have nodejs >= 12 installed

## Run Application

Clone

- `git clone https://github.com/evamaina/ExpressApp` 

Install dependencies

- `npm install`

### Start

Live-Reload: 

- `npm run dev-start`

Node: 

- `npm start`

## Test

-  `npm test`

## Endpoints

| VERB   | URL                                | ACTION                                     |
| ------ | ---------------------------------- | ------------------------------------------ |
| GET    | /api/users                         | Get all users                              |
| GET    | /api/users/:id                     | Get user by id  (currently only 1-6)       |
