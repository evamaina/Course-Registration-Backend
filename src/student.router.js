import express from 'express';
import Student from './models/student.model';

const router = express.Router();

router.get('/students', (req, res) => {
  const studentModel = new Student();
  let students = studentModel.getAll();
  const { cohort } = req.query;
  if(!!cohort){
    // user wants to filter by cohort
    students = studentModel.filter(cohort);
  }
  return res.status(200).json(students);
});

router.post('/enroll', (req, res) => {
  const studentModel = new Student();
  const { body } = req;
  const student = studentModel.create(body);
  const status = 201;
  return res.status(status).json(student);
});

export default router;
