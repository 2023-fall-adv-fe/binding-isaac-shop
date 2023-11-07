import React from 'react';
import logo from './logo.svg';
import './App.css';
import Style from '@mui/icons-material/Style';

//React-Router-Dom
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

//Layout
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container } from '@mui/material';

//Header
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

//Body
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import SettingsIcon from '@mui/icons-material/Settings';

//Footer
import BottomNavigation from '@mui/material/BottomNavigation';

const router = createHashRouter([
  {
    path: "/",
    element: <div>Main</div>,
  },

  {
    path: "/play",
    element: <div>Game Companion</div>,
  },

  {
    path: "/config",
    element: <div>Configuration</div>,
  },

  {
    path: "/offer",
    element: <div>Offer</div>,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
