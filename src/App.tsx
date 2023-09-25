import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Style from '@mui/icons-material/Style';

function App() {
  return (
    <div className="App">

      <Button
        variant='outlined'
        size='large'
        startIcon={<Style/>}
        >Play Shopkeeper</Button>

    </div>
  );
}

export default App;
