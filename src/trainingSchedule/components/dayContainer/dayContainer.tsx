import { Box, Paper, Stack, Typography, styled } from '@mui/material';
import moment, { Moment } from 'moment';
import { Droppable } from 'react-beautiful-dnd';
import { Workout } from 'src/shared/model/common';
import TrainingContainer from '../trainingContainer/trainingContainer';

type Props = {
  date: Moment;
  sessionList: Workout[];
};
const CustomerPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: theme.palette.bgColor.main,
  height: '100%',
  padding: '0.5rem',
  borderRadius: '0.25rem',
  overflowY: 'scroll',
}));

const DayContainer = ({ date, sessionList }: Props) => {
  return (
    <Stack
      flex='1 0 max(300px,calc(100%/7))'
      direction='column'>
      <Typography
        textTransform='uppercase'
        color='GrayText'
        fontWeight={500}
        component='h3'>
        {date.format('ddd')}
      </Typography>
      <Droppable droppableId={date.valueOf().toFixed()}>
        {(provided, snapshot) => (
          <CustomerPaper
            elevation={3}
            sx={(theme) => ({
              backgroundColor: snapshot.isDraggingOver
                ? theme.palette.bgColor.dragOver
                : theme.palette.bgColor.main,
            })}>
            <Typography
              fontWeight={500}
              component='h3'
              textAlign='start'
              color={date.isSame(moment(), 'day') ? 'primary' : 'GrayText'}>
              {date.toDate().getDate()}
            </Typography>
            {sessionList && (
              <Box
                minHeight={100}
                ref={provided.innerRef}
                {...provided.droppableProps}>
                {sessionList.map((session, index) => (
                  <TrainingContainer
                    index={index}
                    key={session.id}
                    {...session}></TrainingContainer>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </CustomerPaper>
        )}
      </Droppable>
    </Stack>
  );
};

export default DayContainer;
