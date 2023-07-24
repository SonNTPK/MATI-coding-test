import AddCircleIcon from '@mui/icons-material/AddCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
} from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import { Workout } from 'src/shared/model/common';
import ExerciseComponent from '../exercise/exercise';
import { textEllipsis } from 'src/util';

const TrainingContainer = (props: Workout & { index: number }) => {
  return (
    <Draggable
      draggableId={props.id}
      index={props.index}>
      {(provided, snapshot) => (
        <Box
          padding='0.1rem'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <Card
            sx={(theme) => ({
              backgroundColor: snapshot.isDragging
                ? theme.palette.primary.light
                : 'white-smoke',
            })}>
            <CardHeader
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title={textEllipsis(props.name, 20)}
              sx={(theme) => ({
                '.MuiCardHeader-title': {
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  textAlign: 'start',
                  color: '#9895c6',
                },
              })}></CardHeader>
            <CardContent>
              <Stack
                direction='column'
                spacing={1}>
                {props.exercises &&
                  props.exercises.length &&
                  props.exercises.map((exercise, index) => (
                    <ExerciseComponent
                      exercise={exercise}
                      key={index}></ExerciseComponent>
                  ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Box ml='auto'>
                <IconButton
                  aria-label='add'
                  size='small'>
                  <AddCircleIcon />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
        </Box>
      )}
    </Draggable>
  );
};

export default TrainingContainer;
