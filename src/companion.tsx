//Body
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import SettingsIcon from '@mui/icons-material/Settings';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import { BottomNavigation, CardActions, CardHeader, CardMedia, Container, Divider, Stack, createTheme } from '@mui/material';
import { Style } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
//Card Array
import CardBase from './cards/cardbase';
import { Scoreboard } from './shopkeeperscore';

//Swipable Edge Drawer
import DrawerButton from './offerdrawer';
import { useState } from 'react';

const EndGame = () => {
    const navigate = useNavigate();
  
    const performEndGame = () => {
      alert("End");
      navigate('/');
    };
  
    return (
      <Button
        style={{ paddingInline: "6.40rem" }}
        color='error'
        variant='contained'
        size='large'
        onClick={performEndGame}
      >
        End Game
      </Button>
    );
  };


const Companion = () => {

    return (
    <>
            <Grid xs={12}>
                <Grid container columns={{xs: 12}}>
                <Grid xs={12}>
                    <Card sx={{ minWidth: 225, marginTop: "0rem", marginBottom: "0rem" }}> {/* Stock Market */}
                    <CardContent>
                        <Typography variant='h5'>
                        Last Games Stock Market123
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>

                <Grid xs={12}>
                    <Grid container columns={{ xs: 4, md: 8 }}>

                    <Grid xs={4} md={8} style={{ marginTop: "0.2rem", marginBottom: "3rem" }}>
                        <Grid container spacing={3} columns={{xs:12}}>

                            <Grid xs={4}>
                                <CardBase />
                            </Grid>
                            <Grid xs={4}>
                                <CardBase />
                            </Grid>
                            <Grid xs={4}>
                                <CardBase />
                            </Grid>
                        </Grid>
                    </Grid>


                    {/* --------------------------------------LOWER BUTTONS--------------------------------- */}
                    <Grid xs={4} style={{ marginTop: "0.2rem", marginBottom: "0.2rem" }}>
                        <DrawerButton />
                    </Grid>

                    <Grid xs={4} style={{ marginTop: "0.2rem", marginBottom: "0.2rem" }}>
                        <EndGame />
                    </Grid>
                    </Grid>
                    <Scoreboard currentCoin={0} currentLoot={0} />
                </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Companion;