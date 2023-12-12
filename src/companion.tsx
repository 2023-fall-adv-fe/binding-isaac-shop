//Body
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import SettingsIcon from '@mui/icons-material/Settings';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import { BottomNavigation, CardActions, CardHeader, CardMedia, Container, createTheme } from '@mui/material';
import { Style } from '@mui/icons-material';

//Images of Card Art
// import DadsLostCoin from './img/cardArt/DadsLostCoin';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

//Card Array
import CardBase from './cards/cardbase';

//Swipable Edge Drawer
import DrawerButton from './offerdrawer';

const EndGame = () => {
    return(alert("End"));
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
                        <Button
                        style={{ paddingInline: "6.40rem" }}
                        color='error'
                        variant='contained'
                        size='large'
                        onClick={EndGame}
                        >End Game
                        </Button>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Companion;