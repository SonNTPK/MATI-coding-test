import { Chip, Paper, Stack, Typography, styled } from '@mui/material';
import moment, { Moment } from 'moment';
import React from 'react';
import { Workout } from 'src/shared/model/common';

type Props = {
  date: Moment;
  sessionList: Workout[];
};
const CustomerPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: theme.palette.bgColor.main,
  height: '100%',
  width: '100%',
  padding: '0.5rem',
  borderRadius: '0.25rem',
}));

const DayContainer = ({ date, sessionList }: Props) => {
  return (
    <Stack
      flex='1 1 auto'
      direction='column'
      width='100%'>
      <Typography
        textTransform='uppercase'
        color='GrayText'
        fontWeight={500}
        component='h3'>
        {date.format('ddd')}
      </Typography>
      <CustomerPaper elevation={3}>
        <Typography
          fontWeight={500}
          component='h3'
          textAlign='start'
          color={date.isSame(moment(), 'day') ? 'primary' : 'GrayText'}>
          {date.toDate().getDate()}
        </Typography>
      </CustomerPaper>
    </Stack>
  );
};

export default DayContainer;
