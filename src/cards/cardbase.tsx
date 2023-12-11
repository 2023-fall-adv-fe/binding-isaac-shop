//Body
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';

//Card Icons
import FavoriteIcon from '@mui/icons-material/Favorite';          // Heart
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';    // Money
import { log } from 'console';

//Card Array
import { tradingCards } from './cardarr';

/*
bgcolor: 'lightyellow'   =    LEGENDARY
bgcolor: 'lightblue'     =    RARE
bgcolor: 'white'         =    COMMON
*/

//---------------------RANDOM-----------------------

const RandomCardNumber = () => {
    let maxCards = (tradingCards.length) //quantity in card array
    let x = (Math.floor(Math.random() * maxCards));
    console.log(maxCards, "|||", x, "|||", tradingCards[x].name)
    return(x)
};


//---------------------CARD-----------------------
const CardBase = () => {
let cdN = RandomCardNumber();

return (
    <Grid container sx={{
        bgcolor: 'lightyellow',
        minHeight: '100%',
        maxHeight: '100%',
        border: 'purple',
        display: 'flex',
        flexDirection: 'column'
}}>
        <Grid sx={{
            bgcolor: 'white',
        }}>
            <Typography variant='h5' sx={{}}>
            {tradingCards[cdN].name}
            </Typography>
            <Typography variant='body1' sx={{color: 'grey'}}>
            {tradingCards[cdN].rarity}
            </Typography>

        </Grid>
        <Grid >
            <Typography variant='body1' sx={{}}>
            {tradingCards[cdN].description}
            </Typography>
        </Grid>

        <Grid sx={{marginTop: 'auto', marginBottom: '1rem'}}>
            <Button size="small" color='error' variant='contained'>Remove</Button>
        </Grid>
    </Grid>
);
};


export default CardBase;