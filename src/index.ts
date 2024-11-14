import type { IStudent } from './types/student.types';
import { getStudentInfo } from './functions/student.functions';
// import {
//   TOTAL_NUMBER_OF_HOMEWORKS as TOTAL,
//   TOTAL_NUMBER_OF_LECTIONS as TOTAL_L,
// } from "./constatnts/student.constants";
import * as StudentConstants from './constatnts/student.constants';
import StudentClass from './classes/student';
import _ from 'lodash';

const students: IStudent[] = [];

students.push({
  name: 'Anastasia',
  numberOfSkippedHWs: 2
});

students.push({
  name: 'Volodymir',
  numberOfSkippedHWs: 0
});

students.forEach((student) => console.log(getStudentInfo(student)));
// console.log(students[0].numberOfSkippedHWs < TOTAL);
console.log(
  students[0].numberOfSkippedHWs < StudentConstants.TOTAL_NUMBER_OF_HOMEWORKS
);

const student = new StudentClass('Alexei', 15);
console.log(getStudentInfo(student));

const s1 = new StudentClass('Anastasia', 2);
const s2: IStudent = { name: 'Anastasia', numberOfSkippedHWs: 2 };
const s3: IStudent = { name: 'Anastasia', numberOfSkippedHWs: 2 };

console.log(_.isEqual(s3, s2));
console.log(_.isEqual(s1, s2));

// let name = "Anastasia";
// let name2 = "Anastasia";
// let name3 = `Anastasia`;
// const name4 = "Anastasia";

console.log(1 === 1);
