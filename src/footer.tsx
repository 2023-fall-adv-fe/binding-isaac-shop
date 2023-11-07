//Header
import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';

function Footer() {
    return(
        <>
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
        </>
    );
}

export default Footer;