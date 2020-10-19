
import Joi from 'joi';


const schema = Joi.object({
  firstName: Joi.string()
      .max(30)
      .required(),

  lastName: Joi.string()
      .max(30)
      .required(),

  registrationNumber: Joi.string()
      .min(3)
      .max(30)
      .required(),

  email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

  cohort: Joi.string()
      .required(),
})

export const validateStudent = (req, res, next) => {
  const student = req.body;
  const { error } = schema.validate(student);

  if (error) return res.status(400).send({ error });
  else return next();
}
