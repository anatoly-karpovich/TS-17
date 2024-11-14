import { IStudent } from '../types/student.types';

export default class Student implements IStudent {
  constructor(
    public name: string,
    public numberOfSkippedHWs: number
  ) {}
}

export const DEFAULT_STUDENT_NAME = 'Andrew';
