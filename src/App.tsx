import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { theme } from './theme/MUI/custome';
import TrainingSchedule from './trainingSchedule/page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container maxWidth='xl'>
          <div className='app'>
            <TrainingSchedule></TrainingSchedule>
          </div>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
