//Body
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import SettingsIcon from '@mui/icons-material/Settings';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import { CardHeader, CardMedia, Container } from '@mui/material';
import { Style } from '@mui/icons-material';

//Images of Card Art
// import DadsLostCoin from './img/cardArt/DadsLostCoin';

const Companion = () => {
    return (
        <>
            <Grid xs={12}>
                <div>companion</div>
                <Grid container columns={{xs: 12}}>
                <Grid xs={12}>
                    <Card sx={{ minWidth: 225, marginTop: "0rem", marginBottom: "0rem" }}> {/* Stock Market */}
                    <CardContent>
                        <Typography variant='h5'>
                        Last Games Stock Market
                        </Typography>
                        <img src="./img/cardArt/dadsLostCoin" alt="" />
                    </CardContent>
                    </Card>
                </Grid>

                <Grid xs={12} sx={{ bgcolor: 'lightblue', color: 'black'}}>
                    <Grid container columns={{ xs: 4, md: 8 }} sx={{ bgcolor: 'darkgrey', color: 'black'}}>
                    <Grid xs={4} md={8} style={{ marginTop: "0.2rem", marginBottom: "3rem" }}>
                        <Grid container columns={{xs:3, md:1}} sx={{ bgcolor: 'grey', color: 'black'}}>
                            <Grid xs={1}>
                                <Card>
                                    <CardHeader
                                        title='Card Name'
                                        subheader='Common'
                                    />
                                    <CardMedia
                                    component='img'
                                    height='150'
                                    image='./img/cardArt/dadsLostCoin'
                                    />

                                </Card>
                                <Button>Item 1</Button>
                            </Grid>
                            <Grid xs={1}>
                                <Button>Item 2</Button>
                            </Grid>
                            <Grid xs={1}>
                                <Button>Item 3</Button>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid xs={4} style={{ marginTop: "0.2rem", marginBottom: "0.2rem" }}>
                        <Button
                        style={{ paddingInline: "8rem" }}
                        color="success"
                        variant='contained'
                        size='large'
                        startIcon={<Style/>}
                        >Play
                        </Button>
                    </Grid>

                    <Grid xs={4} style={{ marginTop: "0.2rem", marginBottom: "0.2rem" }}>
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
        </>
    );
}

export default Companion;