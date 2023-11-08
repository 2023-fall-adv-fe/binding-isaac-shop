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




const Companion = () => {
    return (
        <>
            <Grid xs={12}>
                <Grid container columns={{xs: 12}}>
                <Grid xs={12}>
                    <Card sx={{ minWidth: 225, marginTop: "0rem", marginBottom: "0rem" }}> {/* Stock Market */}
                    <CardContent>
                        <Typography variant='h5'>
                        Last Games Stock Market
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>

                <Grid xs={12}>
                    <Grid container columns={{ xs: 4, md: 8 }}>

                    <Grid xs={4} md={8} style={{ marginTop: "0.2rem", marginBottom: "3rem" }}>
                        <Grid container spacing={1} columns={{xs:3, md:1}}>


                            {/* ----------------------------------CARD ONE---------------------------------- */}
                            <Grid xs={1}>
                                <Grid container sx={{
                                    bgcolor: 'white',
                                    minHeight: '100%',
                                    maxHeight: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <Grid>
                                        <Typography variant='h5' sx={{marginTop: '1rem', marginInline: '0.75rem'}}>
                                            Dads Lost Coin
                                        </Typography>
                                        <Typography variant='body1' sx={{color: 'grey', marginTop: '0.5rem', marginBottom: '1.25rem'}}>
                                            Common
                                        </Typography>

                                    </Grid>
                                    <Grid >
                                        <Typography variant='body1' sx={{marginBottom: '1rem', marginInline: '0.75rem'}}>
                                            When anyone rolls a 1, you may reroll it.
                                        </Typography>
                                    </Grid>

                                    <Grid sx={{marginTop: 'auto', marginBottom: '1rem'}}>
                                        <Button size="small" color='error' variant='contained'>Remove</Button>
                                    </Grid>
                                </Grid>
                            </Grid>


                            {/* ----------------------------------CARD TWO---------------------------------- */}
                            <Grid xs={1}>
                                <Grid container sx={{
                                    bgcolor: 'lightblue',
                                    minHeight: '100%',
                                    maxHeight: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <Grid>
                                        <Typography variant='h5' sx={{marginTop: '1rem', marginInline: '0.75rem'}}>
                                            Dinner
                                        </Typography>
                                        <Typography variant='body1' sx={{color: 'grey', marginTop: '0.5rem', marginBottom: '1.25rem'}}>
                                            Rare
                                        </Typography>

                                    </Grid>
                                    <Grid >
                                        <Typography variant='body1' sx={{marginBottom: '1rem', marginInline: '0.75rem'}}>
                                            +1 <FavoriteIcon fontSize='small'/>
                                        </Typography>
                                    </Grid>

                                    <Grid sx={{marginTop: 'auto', marginBottom: '1rem'}}>
                                        <Button size="small" color='error' variant='contained'>Remove</Button>
                                    </Grid>
                                </Grid>
                            </Grid>

          
                            {/* ----------------------------------CARD THREE---------------------------------- */}
                            <CardBase />

                        </Grid>
                    </Grid>


                    {/* --------------------------------------LOWER BUTTONS--------------------------------- */}
                    <Grid xs={4} style={{ marginTop: "0.2rem", marginBottom: "0.2rem" }}>
                        <Button
                        sx={{bgcolor: 'gold', color: 'black'}}
                        style={{ paddingInline: "5rem" }}
                        variant='contained'
                        size='large'
                        startIcon={<Style/>}
                        >Make Offer
                        </Button>
                    </Grid>

                    <Grid xs={4} style={{ marginTop: "0.2rem", marginBottom: "0.2rem" }}>
                        <Button
                        style={{ paddingInline: "6.40rem" }}
                        color='error'
                        variant='contained'
                        size='large'
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