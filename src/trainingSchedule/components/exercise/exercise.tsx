import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { Exercise } from 'src/shared/model/common';
import { textEllipsis } from 'src/util';

const ExerciseComponent = (props: { exercise: Exercise }) => {
  const { exercise } = props;
  return (
    <Card>
      <CardHeader
        title={exercise.name}
        sx={(theme) => ({
          '.MuiCardHeader-title': {
            fontWeight: 500,
            fontSize: '1rem',
            whiteSpace: 'nowrap',
            textAlign: 'end',
          },
        })}></CardHeader>
      <CardContent>
        <Stack
          direction='row'
          justifyContent='space-between'>
          <Typography
            fontWeight={500}
            color='GrayText'>
            {exercise.number}x
          </Typography>
          <Typography color='GrayText'>
            {textEllipsis(exercise.setInformation, 25)}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
export default ExerciseComponent;
