import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import { Workout } from 'src/shared/model/common';

const TrainingContainer = (props: Workout & { index: number }) => {
  const cutText = (name: string): string => {
    if (name?.length > 15) return name.slice(0, 15) + '...';
    else return name;
  };
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
                : 'white',
            })}>
            <CardHeader
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title={cutText(props.name)}
              sx={(theme) => ({
                '.MuiCardHeader-title': {
                  whiteSpace: 'nowrap',
                  textAlign: 'start',
                  color: theme.palette.primary.main,
                },
              })}></CardHeader>
            <CardContent>{props.name}</CardContent>
            <CardActions>
              <Box ml='auto'>
                <IconButton
                  aria-label='add'
                  size='small'>
                  <AddIcon />
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
