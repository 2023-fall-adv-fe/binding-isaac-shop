import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Style from '@mui/icons-material/Style';


import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container } from '@mui/material';

//Header
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

//Body
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SettingsIcon from '@mui/icons-material/Settings';

//Footer
import BottomNavigation from '@mui/material/BottomNavigation';

//xs: { flexGrow: 1 }, md: { flexGrow: 1 }

function App() {
  return (
    <div className="App">

      <Container>

        <Grid container spacing={11} columns={12}>


          {/* --------------------------------HEADER--------------------------------------- */}
          <Grid xs={12}>
            <header>
              <AppBar sx={{ bgcolor: 'lightgrey', color: 'black'}}>
                <Toolbar>
                  {/* <IconButton size='large' edge='start'>
                  <LocalAtmIcon />
                  </IconButton> */}
                  <Grid container sx={{ flexGrow: {xs:0,md:1} }}>
                  <Grid xs={12}>
                    <Typography sx={{ fontSize: '0.8rem' }} component="div">
                      Binding of Isaac
                    </Typography>
                  </Grid>
                  <Grid xs={12}>
                    <Typography sx={{ fontSize: '1.8rem' }} variant="h5" component="div">
                      Shopkeeper
                    </Typography>
                  </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
            </header>
          </Grid>


          {/* --------------------------------BODY----------------------------------------- */}
          <Grid xs={12}>
            <Grid container columns={{xs: 12}}>
              <Grid xs={12}>
                <Card sx={{ minWidth: 225 }}> {/* Stock Market */}
                  <CardContent>
                    <Typography variant='h5' component="div">
                      Last Games Stock Market
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid xs={12}>
                <Grid container columns={{ xs: 4, md: 8 }}>
                  <Grid xs={4} style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                    <Button
                      style={{ paddingInline: "8rem" }}
                      color="success"
                      variant='contained'
                      size='large'
                      startIcon={<Style/>}
                      >Play
                    </Button>
                  </Grid>

                  <Grid xs={4} style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                    <Button
                      style={{ paddingInline: "5.12rem" }}
                      color='info'
                      variant='contained'
                      size='large'
                      startIcon={<SettingsIcon/>}
                      >Configuration
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>


          {/* --------------------------------FOOTER----------------------------------------- */}
          <AppBar>
            <BottomNavigation sx={{
              position: 'fixed',
              bottom: 0,
              width: 1,
              bgcolor: 'lightgrey',
              color: 'black'
            }}>
            </BottomNavigation>
          </AppBar>


        </Grid>
      </Container>
    </div>
  );
}

export default App;
