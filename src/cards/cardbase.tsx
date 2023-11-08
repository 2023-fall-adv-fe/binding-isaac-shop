//Body
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';

//Card Icons
import FavoriteIcon from '@mui/icons-material/Favorite';          // Heart
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';    // Money
import { log } from 'console';

/*
bgcolor: 'lightyellow'   =    LEGENDARY
bgcolor: 'lightblue'     =    RARE
bgcolor: 'white'         =    COMMON
*/


// -------------------STRUCURE--------------------

class TradingCard {
    constructor(
        public name: string,
        public rarity: string,
        public description: string
    ) {}
  }
  
  // Array to store trading cards
  const tradingCards: TradingCard[] = [
    { name: "Dads Lost Coin", rarity: "Common", description: "When anyone rolls a 1, you may reroll it." },
    { name: "Dinner", rarity: "Rare", description: "+1 HP" },
    { name: "Pay to Play", rarity: "Legendary", description: "Pay 10: Steal an item from any player." },
  ];
  
  // Add trading cards to the array
//   tradingCards.push(new TradingCard("Card 1", "Common", "A common trading card."));
//   tradingCards.push(new TradingCard("Card 2", "Rare", "A rare trading card with unique abilities."));
//   tradingCards.push(new TradingCard("Card 3", "Legendary", "An extremely rare and powerful trading card."));
  
  // Access trading card information
//   console.log(tradingCards[0].name); // "Card 1"
//   console.log(tradingCards[1].rarity); // "Rare"
//   console.log(tradingCards[2].description); // "An extremely rare and powerful trading card."

const valueToString = (name: string) => {
    console.log(name.toString);
    return(name);
};

//---------------------CARD-----------------------
const CardBase = () => {
return (
    <Grid xs={4}>
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
            {tradingCards[1].name}
            </Typography>
            <Typography variant='body1' sx={{color: 'grey'}}>
            {tradingCards[1].rarity}
            </Typography>

        </Grid>
        <Grid >
            <Typography variant='body1' sx={{}}>
            {tradingCards[1].description}
            </Typography>
        </Grid>

        <Grid sx={{marginTop: 'auto', marginBottom: '1rem'}}>
            <Button size="small" color='error' variant='contained'>Remove</Button>
        </Grid>
    </Grid>
    </Grid>
);
};


export default CardBase;