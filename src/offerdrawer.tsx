import * as React from 'react';
import { useState } from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Style } from '@mui/icons-material';
import { AppBar, Avatar, Grid, IconButton, Input, ListItem, ListItemText, Stack, TextField, Toolbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StyleIcon from '@mui/icons-material/Style';
import DiamondIcon from '@mui/icons-material/Diamond';
import { tradingCards } from './cards/cardarr';

// Data Needed---------------

// interface SKStatsProps {
//     onUpdatePoints: (value: number) => void;
//   }
  
//   const AddButton: React.FC<SKStatsProps> = ({ onUpdatePoints }) => {
//     const [inputValue, setInputValue] = useState<string>('');
  
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setInputValue(e.target.value);
//     };
  
//     const handleAdd = () => {
//       const valueToAdd = isNaN(parseFloat(inputValue)) ? 0 : parseFloat(inputValue);
//       onUpdatePoints(valueToAdd);
//       setInputValue('');
//     };
  
//     return (
//       <div>
//         <input
//           type="number"
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <Button variant="contained" color="primary" onClick={handleAdd}>
//           Add Points
//         </Button>
//       </div>
//     );
//   };
  
//   const SubtractButton: React.FC<SKStatsProps> = ({ onUpdatePoints }) => {
//     const [inputValue, setInputValue] = useState<string>('');
  
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setInputValue(e.target.value);
//     };
  
//     const handleSubtract = () => {
//       const valueToSubtract = isNaN(parseFloat(inputValue)) ? 0 : parseFloat(inputValue);
//       onUpdatePoints(-valueToSubtract); // Subtracting, so pass a negative value
//       setInputValue('');
//     };
  
//     return (
//       <div>
//         <input
//           type="number"
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <Button variant="contained" color="secondary" onClick={handleSubtract}>
//           Subtract Points
//         </Button>
//       </div>
//     );
//   };
  
//   const ButtonLogic: React.FC<SKStatsProps> = ({ onUpdatePoints }) => {
//     return (
//       <div>
//         <h2>Button Logic</h2>
//         <AddButton onUpdatePoints={onUpdatePoints} />
//         <SubtractButton onUpdatePoints={onUpdatePoints} />
//       </div>
//     );
//   };




// //Coin & Loot Stat Modifiers
// //Remove;


// //Add;





const drawerBleeding = 56;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

export default function SwipeableEdgeDrawer() {
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };

//Get Shopkeeper info (Left) --------------
const [leftCoinAmount, setLeftCoinAmount] = useState('');
const [leftLootAmount, setLeftLootAmount] = useState('');
const [leftTreasureName, setLeftTreasureName] = useState('');
const [leftModifiedElements, setLeftModifiedElements] = useState<React.ReactNode[]>([]);
//Get user information (Right)--------------
const [rightCoinAmount, setRightCoinAmount] = useState('');
const [rightLootAmount, setRightLootAmount] = useState('');
const [rightTreasureName, setRightTreasureName] = useState('');
const [rightModifiedElements, setRightModifiedElements] = useState<React.ReactNode[]>([]);
//SK Coin Values--------------
const [tCoins, totalCoins] = useState('');
// setLeftModifiedElements([...totalCoins, newCoinNumber]);

// LEFT FUNCTIONS!
const handleLeftDeleteButtonClick = (element: React.ReactNode) => {
    const updatedElements = leftModifiedElements.filter((el) => el !== element);
    setLeftModifiedElements(updatedElements);
};
const handleLeftCoinButtonClick = () => {
    const modifiedElement = (
        <Stack
        key={leftModifiedElements.length}
        margin={1}
        spacing={2}
        paddingY="10px"
        direction="row"
        alignItems="center"
        alignSelf="start"
        >
        <Stack>
            <Avatar sx={{ color: 'black' }}>C</Avatar>
        </Stack>
        <Stack sx={{ minWidth: 0, flexGrow: 1 }}>
            <Typography variant="h6" noWrap>
            {'Coin: ' + Number(leftCoinAmount)}
            </Typography>
        </Stack>
        </Stack>
    );

    setLeftModifiedElements([...leftModifiedElements, modifiedElement]);
    // removeCoinsFromSK(Number(leftCoinAmount));
    setLeftCoinAmount('');
};
const handleLeftLootButtonClick = () => {
    const modifiedElement = (
        <Stack
        key={leftModifiedElements.length}
        margin={1}
        spacing={2}
        paddingY="10px"
        direction="row"
        alignItems="center"
        alignSelf="start"
        >
        <Stack>
            <Avatar sx={{ color: "black", bgcolor: 'lightblue' }}>L</Avatar>
        </Stack>
        <Stack sx={{ minWidth: 0, flexGrow: 1 }}>
            <Typography variant="h6" noWrap>{"Loot: " + Number(leftLootAmount)}</Typography>
        </Stack>
        </Stack>
    );

    setLeftModifiedElements([...leftModifiedElements, modifiedElement]);
    setLeftLootAmount('');
};
const handleLeftTreasureButtonClick = () => {
    const findCardRarityColor = () => {
        console.log("user input: " + leftTreasureName);
        let object = tradingCards.find(obj => obj.name === leftTreasureName);
        console.log(object);
        if (object == undefined) {
            console.log('error missing card name');
            return('pink');
        } else {
            const n = object.rarity;
            if (n == "Common") {return("white")}
            else if (n == "Rare") {return("lightblue")}
            else if (n == "Legendary") {return("#FFFF99")}
            else {return("black")}
        }
    };
    const modifiedElement = (
        <Stack
            key={leftModifiedElements.length}
            spacing={2}
            paddingY="10px"
            margin={1}
            direction="row"
            alignItems="center"
            alignSelf="start"
        >
            <Stack>
                <Avatar sx={{
                    color: 'black',
                    bgcolor: findCardRarityColor()
                }}
                >T</Avatar>
            </Stack>
            <Stack sx={{ minWidth: 0, flexGrow: 1 }}>
                <Typography variant="body1">
                    {leftTreasureName}
                </Typography>
            </Stack>
        </Stack>
    );
    setLeftModifiedElements([...leftModifiedElements, modifiedElement]);
    setLeftTreasureName(''); // Clear input
};

// RIGHT FUNCTIONS!
const handleRightDeleteButtonClick = (element: React.ReactNode) => {
    const updatedElements = rightModifiedElements.filter((el) => el !== element);
    setRightModifiedElements(updatedElements);
};
const handleRightCoinButtonClick = () => {
    const modifiedElement = (
        <Stack
        key={rightModifiedElements.length}
        margin={1}
        spacing={2}
        paddingY="10px"
        direction="row"
        alignItems="center"
        alignSelf="start"
        >
        <Stack>
            <Avatar sx={{ color: 'black' }}>C</Avatar>
        </Stack>
        <Stack sx={{ minWidth: 0, flexGrow: 1 }}>
            <Typography variant="h6" noWrap>
            {'Coin: ' + Number(rightCoinAmount)}
            </Typography>
        </Stack>
        </Stack>
    );

    setRightModifiedElements([...rightModifiedElements, modifiedElement]);
    setRightCoinAmount('');
};
const handleRightLootButtonClick = () => {
    const modifiedElement = (
        <Stack
            key={rightModifiedElements.length}
            spacing={2}
            margin={1}
            paddingY="10px"
            direction="row"
            alignItems="center"
            alignSelf="start"
        >
            <Stack>
            <Avatar sx={{ color: "black", bgcolor: 'lightblue' }}>L</Avatar>
            </Stack>
            <Stack sx={{ minWidth: 0, flexGrow: 1 }}>
            <Typography variant="h6" noWrap>{"Loot: " + Number(rightLootAmount)}</Typography>
            </Stack>
        </Stack>
        );
    
        setRightModifiedElements([...rightModifiedElements, modifiedElement]);
        setRightLootAmount('');
};
const handleRightTreasureButtonClick = () => {
    const findCardRarityColor = () => {
        console.log("user input: " + rightTreasureName);
        let object = tradingCards.find(obj => obj.name === rightTreasureName);
        console.log(object);
        if (object == undefined) {
            console.log('error missing card name');
            return('pink');
        } else {
            const n = object.rarity;
            if (n == "Common") {return("white")}
            else if (n == "Rare") {return("lightblue")}
            else if (n == "Legendary") {return("#FFFF99")}
            else {return("black")}
        }
    };
    const modifiedElement = (
        <Stack
            key={rightModifiedElements.length}
            spacing={2}
            paddingY="10px"
            margin={1}
            direction="row"
            alignItems="center"
            alignSelf="start"
        >
            <Stack>
                <Avatar sx={{
                    color: 'black',
                    bgcolor: findCardRarityColor()
                }}
                >T</Avatar>
            </Stack>
            <Stack sx={{ minWidth: 0, flexGrow: 1 }}>
                <Typography variant="body1">
                    {rightTreasureName}
                </Typography>
            </Stack>
        </Stack>
    );
    setRightModifiedElements([...rightModifiedElements, modifiedElement]);
    setRightTreasureName(''); // Clear input
};


const submitOffer = () => {
    console.log('Closed');

    const calculateTotal = (modifiedElements: React.ReactNode[]) => {
        let totalCoins = 0;
        let totalLoot = 0;
    
        modifiedElements.forEach((element, index) => {
            if (React.isValidElement(element)) {
                const elementText = extractTextFromElement(element);
                if (elementText.includes('Coin:')) {
                    const coinValue = Number(elementText.split(' ')[1]);
                    totalCoins += coinValue;
                }
                if (elementText.includes('Loot:')) {
                    const lootValue = Number(elementText.split(' ')[1]);
                    totalLoot += lootValue;
                }
            }
        });
        return { totalCoins, totalLoot };
    };
    
    const extractTextFromElement = (element: React.ReactNode): string => {
        if (typeof element === 'string') {
            return element;
        } else if (React.isValidElement(element)) {
            const childTexts: string[] = React.Children.map(element.props.children, (child) => {
                return extractTextFromElement(child);
            });
            return childTexts.join('');
        }
        return '';
    };
    const leftTotal = calculateTotal(leftModifiedElements);
    const rightTotal = calculateTotal(rightModifiedElements);

    console.log('Left Total Coins:', leftTotal.totalCoins);
    console.log('Left Total Loot:', leftTotal.totalLoot);

    console.log('Right Total Coins:', rightTotal.totalCoins);
    console.log('Right Total Loot:', rightTotal.totalLoot);

    //Subtract / Add from current amount


};



return (
<>
    <Global styles={{ '.MuiDrawer-root > .MuiPaper-root': { height: `calc(50% - ${drawerBleeding}px)`, overflow: 'visible', }}}/>
    <Button
    sx={{ bgcolor: 'gold', color: 'black' }}
    style={{ paddingInline: '5rem' }}
    variant='contained'
    size='large'
    startIcon={<Style />}
    onClick={toggleDrawer(true)}
    >
    Make Offer
    </Button>

    <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
            keepMounted: true,
        }}
    >
    <StyledBox sx={{ pt: 4, px: 2, pb: 2, height: '100%', overflow: 'auto', bgcolor: 'white' }}>
        <Grid container>
        <Grid container xs={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {/* _____________________________________________Left Inventory________________________________ */}
            <Grid item xs={12} sm={6}>
            <Grid container bgcolor={'grey'}>
                {leftModifiedElements.map((element, index) => (
                <Stack key={index} bgcolor={'lightgrey'} borderRadius={1} margin={1.2}>
                    {element}
                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleLeftDeleteButtonClick(element)}
                        sx={{ m: '10px' }}
                    >
                        Delete
                    </Button>
                </Stack>
                ))}
            </Grid>
            </Grid>
            {/* _____________________________________________Right Inventory________________________________ */}
            <Grid item xs={12} sm={6}>
            <Grid container bgcolor={'grey'}>
                {rightModifiedElements.map((element, index) => (
                <Stack key={index} bgcolor={'lightgrey'} borderRadius={1} margin={1.2}>
                    {element}
                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleRightDeleteButtonClick(element)}
                        sx={{ m: '10px' }}
                    >
                        Delete
                    </Button>
                </Stack>
                ))}
            </Grid>
            </Grid>
        </Grid>
        <Grid container xs={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* _______________________________Left UI________________________________________________ */}
        <Grid item xs={12} sm={6}>
        <AppBar position="static" color="primary">
            <Toolbar>
            <Stack spacing={0} direction="row" borderRadius={2}>
                {/* ----------COIN---------- */}
                <div>
                <TextField
                    id="standard-number"
                    label="Coins"
                    value={leftCoinAmount}
                    type="number"
                    onChange={(e) => setLeftCoinAmount(e.target.value)}
                    size="small"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="standard"
                />
                </div>
                <Button
                variant="contained"
                color="info"
                sx={{ marginRight: '10px' }}
                startIcon={<MonetizationOnIcon />}
                onClick={handleLeftCoinButtonClick}
                ></Button>
                {/* ----------LOOT---------- */}
                <div>
                <TextField
                    id="standard-number"
                    label="Loot Cards"
                    value={leftLootAmount}
                    type="number"
                    onChange={(e) => setLeftLootAmount(e.target.value)}
                    size="small"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="standard"
                />
                </div>
                <Button
                variant="contained"
                color="info"
                sx={{ marginRight: '10px' }}
                startIcon={<StyleIcon />}
                onClick={handleLeftLootButtonClick}
                ></Button>
                {/* ----------TREASURE---------- */}
                <div>
                <TextField label="Treasure Name" value={leftTreasureName} onChange={(e) => setLeftTreasureName(e.target.value)} size="small" />
                </div>
                <Button variant="contained" color="info" startIcon={<DiamondIcon />} onClick={handleLeftTreasureButtonClick}></Button>
            </Stack>
            </Toolbar>
        </AppBar>
        </Grid>
        {/* _______________________________Right UI________________________________________________ */}
        <Grid item xs={12} sm={6}>
        <AppBar position="static" color="primary">
            <Toolbar>
            <Stack spacing={0} direction="row" borderRadius={2}>
                {/* ----------COIN---------- */}
                <div>
                <TextField
                    id="standard-number"
                    label="Coins"
                    value={rightCoinAmount}
                    type="number"
                    onChange={(e) => setRightCoinAmount(e.target.value)}
                    size="small"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="standard"
                />
                </div>
                <Button
                variant="contained"
                color="info"
                sx={{ marginRight: '10px' }}
                startIcon={<MonetizationOnIcon />}
                onClick={handleRightCoinButtonClick}
                ></Button>
                {/* ----------LOOT---------- */}
                <div>
                <TextField
                    id="standard-number"
                    label="Loot Cards"
                    value={rightLootAmount}
                    type="number"
                    onChange={(e) => setRightLootAmount(e.target.value)}
                    size="small"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="standard"
                />
                </div>
                <Button
                variant="contained"
                color="info"
                sx={{ marginRight: '10px' }}
                startIcon={<StyleIcon />}
                onClick={handleRightLootButtonClick}
                ></Button>
                {/* ----------TREASURE---------- */}
                <div>
                <TextField label="Treasure Name" value={rightTreasureName} onChange={(e) => setRightTreasureName(e.target.value)} size="small" />
                </div>
                <Button variant="contained" color="info" startIcon={<DiamondIcon />} onClick={handleRightTreasureButtonClick}></Button>
            </Stack>
            </Toolbar>
        </AppBar>
        </Grid>
        </Grid>
        </Grid>
    </StyledBox>
    <Button onClick={submitOffer} variant="contained" color='warning'>Submit Offer</Button>
    </SwipeableDrawer>
</>
);
}