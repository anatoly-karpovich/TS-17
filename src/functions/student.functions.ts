import { IStudent } from '../types/student.types';

function getStudentInfo(student: IStudent) {
  return `Student ${student.name} skipped ${student.numberOfSkippedHWs} homeworks`;
}

export { getStudentInfo };
