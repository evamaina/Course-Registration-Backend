import { checkSchema } from 'express-validator'

export const validateStudent = () => checkSchema({
  firstName: {
    in: "body",
    isAlpha: {
      // To negate a validator
      errorMessage: "Name should be alphabetic",
    },
    isEmpty: {
      errorMessage: "Name should not be empty"
    },
    optional: false
  },
  lastName: {
    in: "body",
    isAlpha: {
      // To negate a validator
      errorMessage: "Name should be alphabetic",
    },
    isEmpty: {
      errorMessage: "Name should not be empty"
    },
    optional: false
  },
  email: {
    in: "body",
    isString: {
      // To negate a validator
      errorMessage: "Email should be alphabetic",
    },
    isEmpty: {
      errorMessage: "Name should not be empty"
    },
    isEmail: {
      errorMessage: "Enter a valid email"
    },
    optional: false
  },
  cohort: {
    in: "body",
    isAlpha: {
      // To negate a validator
      errorMessage: "Cohort should be alphabetic",
    },
    isEmpty: {
      errorMessage: "Cohort should not be empty"
    },
    optional: false
  },
  registrationNumber: {
    in: "body",
    isString: {
      // To negate a validator
      errorMessage: "Reg Number should be a string",
    },
    isEmpty: {
      errorMessage: "Name should not be empty"
    },
    optional: false
  }
})