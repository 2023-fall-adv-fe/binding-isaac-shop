//Body
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import SettingsIcon from '@mui/icons-material/Settings';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Style } from '@mui/icons-material';

//Icons
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Offer = () => {
    return (
        <>
            <Grid xs={12}>
                <div>offer</div>
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

export default Offer;