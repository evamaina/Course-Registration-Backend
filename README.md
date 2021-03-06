[![Build Status](https://travis-ci.org/evamaina/Course-Registration-Backend.svg?branch=master)](https://travis-ci.org/evamaina/Course-Registration-Backend)
[![Coverage Status](https://coveralls.io/repos/github/evamaina/Course-Registration-Backend/badge.svg?branch=master)](https://coveralls.io/github/evamaina/Course-Registration-Backend?branch=master)
# ExpressApp

NodeJs Express RESTful API
Ensure you have nodejs >= 12 installed

## Run Application

Clone

- `git clone https://github.com/evamaina/Course-Registration-Backend` 

Install dependencies

- `npm install`

Setup environment

- Ensure you have the following in your environment variables: 
  - SENDGRID_API_KEY

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
| GET    | /api/students                      | Get all students                           |
| GET    | /api/students?cohort=""            | Filter based on cohort                     |
| POST   | /api/enroll/                       | Enroll to a course                         |

### Enroll
Body:
```

{
    firstName: string,
    lastName: string,
    registrationNumber: string,
    email: string,
    cohort: string
}

```
