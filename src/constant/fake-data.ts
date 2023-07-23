import moment from 'moment';
import { Workout } from 'src/shared/model/common';
import { v4 as uuidv4 } from 'uuid';

export const workoutList: Workout[] = [
  {
    orderNo: 1,
    date: moment().isoWeekday(1).toString(),
    id: uuidv4(),
    name: 'Chest course day 1 Chest course day 1',
    exercises: null,
  },
  {
    orderNo: 2,
    date: moment().isoWeekday(1).toString(),
    id: uuidv4(),
    name: 'Chest course day 2 Chest course day 1',
    exercises: null,
  },
  {
    orderNo: 3,
    date: moment().isoWeekday(1).toString(),
    id: uuidv4(),
    name: 'Chest course day 3 Chest course day 1',
    exercises: null,
  },
  {
    orderNo: 4,
    date: moment().isoWeekday(2).toString(),
    id: uuidv4(),
    name: 'Chest course day 4 Chest course day 1',
    exercises: null,
  },
  {
    orderNo: 5,
    date: moment().isoWeekday(3).toString(),
    id: uuidv4(),
    name: 'Chest course day 5 Chest course day 1',
    exercises: null,
  },
  {
    orderNo: 6,
    date: moment().isoWeekday(4).toString(),
    id: uuidv4(),
    name: 'Chest course day 6 Chest course day 1',
    exercises: null,
  },
  {
    orderNo: 7,
    date: moment().isoWeekday(5).toString(),
    id: uuidv4(),
    name: 'Chest course day 7 Chest course day 1',
    exercises: null,
  },
];
