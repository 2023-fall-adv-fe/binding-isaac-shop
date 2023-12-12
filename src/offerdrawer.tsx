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

// Data Needed---------------
const drawerBleeding = 56;
const itemName = "Guppy Items"; // Name for the offer item
const itemType = "T"; // Letter for Item in offer (Treasure = T, Loot = L, Coin = C, Soul = S)
const itemRarity = { color: "black", bgcolor: 'lightyellow' };
const lootCount = 2;
const soulCount = 1;

// OBJECT STRUCTURE -----------
const ListObject = (iT: string, iR: object, iN: string) => (
    <Stack spacing={2} paddingY="10px" direction="row" alignItems="center" alignSelf="start">
    <Stack>
      <Avatar sx={iR}>{iT}</Avatar>
    </Stack>
    <Stack sx={{ minWidth: 0, flexGrow: 1 }}>
      <Typography variant="h6" noWrap>{iN}</Typography>
    </Stack>
    <Stack sx={{ minWidth: 0 }}>
      <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Stack>
  </Stack>
);
// -----------

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

export default function SwipeableEdgeDrawer() {
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };


    //Get user information in offer--------------
    const [coinAmount, setCoinAmount] = useState('');
    const [lootAmount, setLootAmount] = useState('');
    const [treasureName, setTreasureName] = useState('');
    const [modifiedElements, setModifiedElements] = useState<React.ReactNode[]>([]);

    // Delete Button
    const handleDeleteButtonClick = (element: React.ReactNode) => {
        const updatedElements = modifiedElements.filter((el) => el !== element);
        setModifiedElements(updatedElements);
    };

    
    const handleCoinButtonClick = () => {
        const modifiedElement = (
            <Stack
            key={modifiedElements.length}
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
                {'Coin: ' + Number(coinAmount)}
                </Typography>
            </Stack>
            </Stack>
        );

        setModifiedElements([...modifiedElements, modifiedElement]);
        setCoinAmount(''); // Clear input
    };
  
    const handleLootButtonClick = () => {
        const modifiedElement = (
          <Stack
            key={modifiedElements.length}
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
              <Typography variant="h6" noWrap>{"Loot: " + Number(lootAmount)}</Typography>
            </Stack>
          </Stack>
        );
    
        setModifiedElements([...modifiedElements, modifiedElement]);
        setLootAmount(''); // Clear input
    };
  
    const handleTreasureButtonClick = () => {
      // Do something with treasureName
      console.log('Treasure Name:', treasureName);
    };


return (
    <>
        <Global
        styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
            },
        }}
        />
    
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
            {/* _____________________ DRAWER CONTENT _____________________ */}
            <Grid container>
            <Grid container xs={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {/* _____________________________________________ShopKeeper Offer________________________________ */}
                <Grid item xs={12} sm={6}>
                <Grid container bgcolor={'grey'}>
                    {modifiedElements.map((element, index) => (
                    <Stack key={index} bgcolor={'lightgrey'} borderRadius={1} margin={1.2}>
                        {element}
                        <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDeleteButtonClick(element)}
                        sx={{ m: '10px' }}
                        >
                        Delete
                        </Button>
                    </Stack>
                    ))}
                </Grid>
                </Grid>
    
                {/* _____________________________________________Player Offer________________________________ */}
                <Grid item xs={12} sm={6}>
                <Stack spacing={1} direction="column" justifyContent="center" alignItems="center" bgcolor={'grey'} borderRadius={2}>
                    {/* ------------OBJ------------- */}
                    {ListObject(itemType, itemRarity, itemName)}
                </Stack>
                </Grid>
            </Grid>
    
            <Grid container xs={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                    <Stack spacing={0} direction="row" borderRadius={2}>
                        {/* ----------COIN---------- */}
                        <div>
                        <TextField
                            id="standard-number"
                            label="Coins"
                            value={coinAmount}
                            type="number"
                            onChange={(e) => setCoinAmount(e.target.value)}
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
                        onClick={handleCoinButtonClick}
                        ></Button>
                        {/* ----------LOOT---------- */}
                        <div>
                        <TextField
                            id="standard-number"
                            label="Loot Cards"
                            value={lootAmount}
                            type="number"
                            onChange={(e) => setLootAmount(e.target.value)}
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
                        onClick={handleLootButtonClick}
                        ></Button>
                        {/* ----------TREASURE---------- */}
                        <div>
                        <TextField label="Treasure Name" value={treasureName} onChange={(e) => setTreasureName(e.target.value)} size="small" />
                        </div>
                        <Button variant="contained" color="info" startIcon={<DiamondIcon />} onClick={handleTreasureButtonClick}></Button>
                    </Stack>
                    </Toolbar>
                </AppBar>
                </Grid>
    
                <Grid item xs={12} sm={6}>
                <Typography bgcolor={'blue'}>Ply UI</Typography>
                </Grid>
            </Grid>
            </Grid>
        </StyledBox>
        </SwipeableDrawer>
    </>
    );
}