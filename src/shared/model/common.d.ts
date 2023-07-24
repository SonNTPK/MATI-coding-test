import moment from 'moment';

export interface Workout {
  orderNo: number;
  date: string;
  id: string;
  name: string;
  exercises: Exercise[] | null;
}

export interface Exercise {
  name: string;
  setInformation: string;
  number: number;
}
