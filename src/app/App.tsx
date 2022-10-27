import React from 'react';
import { AppBar, createTheme, ThemeProvider, Toolbar, Typography } from '@mui/material';
import './App.css';
import { UserList } from '../components';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function appBarLabel(label: string) {
  return (
    <Toolbar>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          {appBarLabel('Test assignment')}
        </AppBar>
        <UserList />
      </ThemeProvider>
    </div>
  );
}

export default App;
