import express from 'express';
import Student from './models/student.model';
import {validateStudent} from './models/validator';
import { sendEnrollmentEmail } from './util';

const router = express.Router();

router.get('/students', (req, res) => {
  const studentModel = new Student();
  let students = studentModel.getAll();
  if(!!req.query){
    // user wants to filter
    const [key, ] = Object.keys(req.query);
    const value = req.query[key];
    students = studentModel.filter(`${key}=${value}`);
  }
  return res.status(200).json(students);
});

router.post('/enroll', validateStudent(), (req, res) => {
  const studentModel = new Student();
  const { body } = req;
  const student = studentModel.create(body);
  sendEnrollmentEmail(student);
  const status = 201;
  return res.status(status).json(student);
});

export default router;
