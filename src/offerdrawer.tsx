import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Search, Style } from '@mui/icons-material';
import { AppBar, Avatar, Grid, IconButton, Input, ListItem, ListItemText, Stack, TextField, Toolbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';

// Data Needed---------------
let itemName = "Guppy Items"; // Name for the offer item
let itemType = "T"; //Letter for Item in offer (Treasure = T, Loot = L, Coin = C, Soul = S)
let itemRarity = { color: "black", bgcolor: 'lightyellow' };

let coinCount = 12;
let lootCount = 2;
let soulCount = 1;
// -------------------------


// OBJECT STRUCTURE -----------
const ListObject = (iT: string, iR: object, iN: string) => {
    console.log("IT: "+iT,"IR: "+iR,"IN: "+iN);
    return(
        <Stack
            spacing={2} paddingY={"10px"} direction="row" alignItems="center" alignSelf={"start"}>
            <Stack>
                <Avatar sx={iR}>{iT}</Avatar>
            </Stack>
            <Stack sx={{ minWidth: 0 , flexGrow: 1}}>
                <Typography variant='h6' noWrap>{iN}</Typography>
            </Stack>
            <Stack sx={{ minWidth: 0 }}>
                <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </Stack>
        </Stack>
    );
};
// COUNT OBJ STRUCTURE -----------
const ListCount = (iT: string, iN: string, cC: number, lC: number, sC: number) => {

    let name = ("Coin: "+ cC);
    let type = "C";


    console.log("IT: "+iT,"IN: "+iN);
    return(
        <Stack
            spacing={2} paddingY={"10px"} direction="row" alignItems="center" alignSelf={"start"}>
            <Stack>
                <Avatar sx={{ color: "black", bgcolor: 'lightgrey' }}>{type}</Avatar>
            </Stack>
            <Stack sx={{ minWidth: 0 , flexGrow: 1}}>
                <Typography variant='h6' noWrap>{name}</Typography>
            </Stack>
            <Stack sx={{ minWidth: 0 }}>
                <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </Stack>
        </Stack>
    );
};

// {ListObject(itemType, itemRarity, itemName)}








const drawerBleeding = 56;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

export default function SwipeableEdgeDrawer() {
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
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
            sx={{bgcolor: 'gold', color: 'black'}}
            style={{ paddingInline: "5rem" }}
            variant='contained'
            size='large'
            startIcon={<Style/>}
            onClick={toggleDrawer(true)}
            >Make Offer
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
            <StyledBox sx={{
                pt: 4,
                px: 2,
                pb: 2,
                height: '100%',
                overflow: 'auto',
                bgcolor: "white"
            }}
            >
            {/* _____________________ DRAWER CONTENT _____________________ */}

            {/* sx={{ marginTop: 'auto' }} */}
                <Grid container>
                    <Grid container xs={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    {/* _____________________________________________ShopKeeper Offer________________________________ */}
                        <Grid item xs={12} sm={6}>
                            <Stack
                                spacing={1}
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                bgcolor={'grey'}
                                borderRadius={2}
                            >
                                {/* ------------OBJ------------- */}
                                {ListObject(itemType, itemRarity, itemName)}
                                {ListObject(itemType, itemRarity, itemName)}
                                {ListCount(itemType, itemName, coinCount, lootCount, soulCount)}
                            </Stack>
                        </Grid>

                    {/* _____________________________________________Player Offer________________________________ */}
                        <Grid item xs={12} sm={6}>
                                <Stack
                                    spacing={1}
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    bgcolor={'grey'}
                                    borderRadius={2}
                                >
                                    {/* ------------OBJ------------- */}
                                    {ListCount(itemType, itemName, coinCount, lootCount, soulCount)}
                                    {ListObject(itemType, itemRarity, itemName)}
                                </Stack>
                            </Grid>
                    </Grid>


                    <Grid container xs={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        <Grid item xs={12} sm={6}>
                            <AppBar position="static" color='primary'>
                                <Toolbar>
                                    <Stack spacing={3} direction="row" borderRadius={2}>
                                        <Button variant="contained" color="info">Item 1</Button>
                                        <Button variant="contained" color="info">Item 1</Button>
                                        <div>
                                            <TextField
                                            label="Item Name"
                                            defaultValue=""
                                            size="small"
                                            />
                                        </div>
                                        <Button variant="contained" color="info">Item 1</Button>
                                    </Stack>

                                </Toolbar>
                            </AppBar>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography bgcolor={"blue"}>Ply UI</Typography>
                        </Grid>
                        
                    </Grid>
                </Grid>


            </StyledBox>
        </SwipeableDrawer>
    </>
  );
}