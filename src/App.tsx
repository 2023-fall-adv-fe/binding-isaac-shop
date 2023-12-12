import React from 'react';
import logo from './logo.svg';
import './App.css';

//React-Router-Dom
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

//Layout
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button, Container } from '@mui/material';

//Pages
import Header from './header';
import Companion from './companion';
import Config from './config';
import Offer from './offer';
import Footer from './footer';
import Home from './home';

const router = createHashRouter([
  {
    path: "/",
    element:  <>
                <Container>
                  <Grid container spacing={8} columns={12}>
                    <Header />
                    <Home />
                    <Footer />
                  </Grid>
                </Container>
              </>,
  },

  {
    path: "/companion",
    element:  <>
                <Container>
                  <Grid container spacing={8} columns={12}>
                    <Header />
                    <Companion />
                    <Footer />
                  </Grid>
                </Container>
              </>,
  },

  {
    path: "/config",
    element:  <>
                <Container>
                  <Grid container spacing={8} columns={12}>
                    <Header />
                    <Config />
                    <Footer />
                  </Grid>
                </Container>
              </>,
  },

  {
    path: "/offer",
    element:  <>
                <Container>
                  <Grid container spacing={8} columns={12}>
                    <Header />
                    <Offer />
                    <Footer />
                  </Grid>
                </Container>
              </>,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
