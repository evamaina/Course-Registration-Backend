// collects functions to create, delete, get student
import fs from 'fs';

class Student {
  constructor(student) {
    const rawdata = fs.readFileSync(`${__dirname}/students.json`);
    this.students = JSON.parse(rawdata);
    
  }

  getAll() {
    // return all students
    return this.students;
  }

  create(student){
      // adds student to json file
      this.students = [...this.students, student];
      fs.writeFileSync(`${__dirname}/students.json`, JSON.stringify(this.students));
      return student;
  }

  filter(cohort){
    // filter students by cohort
    const students = this.students.filter((std) => {
      return std.cohorts.includes(cohort);
    });
    return {
      count: students.length,
      students
    }
  }
}

export default Student;
