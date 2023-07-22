import { Stack } from '@mui/material';
import moment, { Moment } from 'moment';
import { useEffect, useState } from 'react';
import DayContainer from '../components/dayContainer/dayContainer';

type Props = {};

const TrainingSchedule = (props: Props) => {
  const [daysOfWeek, setDaysOfWeek] = useState<Moment[]>([]);

  useEffect(() => {
    const numberOfDays = Array.from({ length: 7 }, (_, index) => ++index);
    setDaysOfWeek(numberOfDays.map((day) => moment().isoWeekday(day)));
  }, []);

  return (
    <Stack
      height={'100vh'}
      alignItems='stretch'
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 0.5, sm: 1, md: 2 }}>
      {daysOfWeek.length &&
        daysOfWeek.map((day) => (
          <DayContainer
            key={day.get('date')}
            date={day}
            sessionList={[]}></DayContainer>
        ))}
    </Stack>
  );
};

export default TrainingSchedule;
