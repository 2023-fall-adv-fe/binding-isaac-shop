// Body
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import { replacedCards, tradingCards } from './cardarr';
type TradingCard = {
    name: string;
    rarity: string;
    description: string;
  };
interface CardBaseProps {
  className?: string;
}

//---------------------RANDOM-----------------------
const RandomCardNumber = () => {
  let maxCards = tradingCards.length; // quantity in card array
  return Math.floor(Math.random() * maxCards);
};

//---------------------CARD-----------------------
const CardBase: React.FC<CardBaseProps> = ({ className }) => {

    const [cardNumber, setCdN] = useState<number>(RandomCardNumber());

    const rarityColor = (n : string) => {
        if (n == "Common") {return("lightgrey")}
        else if (n == "Rare") {return("lightblue")}
        else if (n == "Legendary") {return("#FFFF99")}
        else {return("black")}
    };

  
    //________Remove/Randomize Card Again____Set Current Card Away____________
    const removeClick = () => {
        const newCardNumber = RandomCardNumber();
        setCdN(newCardNumber);

        // Store the replaced card in the replacedCards array
        const replacedCard = tradingCards[cardNumber] as TradingCard;
        replacedCards.push(replacedCard);

        // Remove the replaced card from the tradingCards array
        tradingCards.splice(cardNumber, 1);
    };


  return (
    <Grid
      container
      className={className}
      sx={{
        bgcolor: 'white',
        minHeight: '100%',
        maxHeight: '100%',
        border: 'purple',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: "10px",
        borderLeftColor : rarityColor(tradingCards[cardNumber].rarity),
        borderLeftStyle : "solid",
        borderRightColor : rarityColor(tradingCards[cardNumber].rarity),
        borderRightStyle : "solid"

      }}
    >
      <Grid
        sx={{
          bgcolor: rarityColor(tradingCards[cardNumber].rarity),
          borderTopLeftRadius : '10px',
          borderTopRightRadius : '10px'
        }}
      >
        <Typography variant="h5">
          {tradingCards[cardNumber].name}
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey' }}>
          {tradingCards[cardNumber].rarity}
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="body1" sx={{  marginTop: '1rem', marginBottom: '1rem' }}>
          {tradingCards[cardNumber].description}
        </Typography>
      </Grid>
      <Grid sx={{ marginTop: 'auto', marginBottom: '1rem' }}>
        <Button
          size="small"
          color="info"
          variant="contained"
          onClick={removeClick}
        >
          Replace
        </Button>
      </Grid>
    </Grid>
  );
};

export default CardBase;
