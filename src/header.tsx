//Header
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

function Header() {
    return(
        <>
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
        </>
    );
}

export default Header;