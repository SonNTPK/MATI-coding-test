import { Stack } from '@mui/material';
import moment, { Moment } from 'moment';
import { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { workoutList } from 'src/constant/fake-data';
import { Workout } from 'src/shared/model/common';
import DayContainer from '../components/dayContainer/dayContainer';

type Props = {};

const TrainingSchedule = (props: Props) => {
  const [daysOfWeek, setDaysOfWeek] = useState<Moment[]>([]);
  const [sessions, setSessions] = useState<Workout[]>([]);

  useEffect(() => {
    const numberOfDays = Array.from({ length: 7 }, (_, index) => ++index);
    const weeksDays = numberOfDays.map((day) => moment().isoWeekday(day));
    setDaysOfWeek(weeksDays);
    setSessions(workoutList);
  }, []);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const startColumn = source.droppableId;
    const endColumn = destination.droppableId;
    if (startColumn !== endColumn) {
      const sessionsOfDay = sessions.filter((item) =>
        moment(item.date).isSame(moment(+endColumn), 'day'),
      );
      sessions[source.index - 1].date = moment(+endColumn).toString();
      if (!sessionsOfDay.length) {
        setSessions([...sessions]);
        return;
      }
    }
    const sourceStart = sessions[source.index - 1];
    const sourceEnd = sessions[destination.index - 1];
    sessions.splice(destination.index - 1, 1, { ...sourceStart });
    sessions.splice(source.index - 1, 1, { ...sourceEnd });
    setSessions([...sessions]);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Stack
        padding='1rem 0'
        overflow='scroll'
        height='100%'
        width='100%'
        alignItems='stretch'
        direction='row'
        spacing={{ xs: 0.5, sm: 1, md: 2 }}>
        {daysOfWeek.length &&
          daysOfWeek.map((day) => (
            <DayContainer
              key={day.get('date')}
              date={day}
              sessionList={sessions.filter((session) => {
                // console.log(day.isSame(session.date, 'day'));
                return day.isSame(session.date, 'day');
              })}></DayContainer>
          ))}
      </Stack>
    </DragDropContext>
  );
};

export default TrainingSchedule;
