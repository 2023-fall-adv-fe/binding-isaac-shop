import React from 'react';

import { Grid, Card, CardContent, Stack, Divider, Typography } from "@mui/material";

interface ScoreboardProps {
    currentCoin: number;
    currentLoot: number;
}

export const Scoreboard: React.FC<ScoreboardProps> = ({ currentCoin, currentLoot }) => {
    return (
        <>
            <Grid xs={12} marginTop={4}>
                <Card sx={{ minWidth: 225, marginTop: "0rem", marginBottom: "0rem" }}>
                    <CardContent>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 5, md: 6 }}
                            divider={<Divider orientation="vertical" flexItem />}
                            textAlign={'center'}
                            justifyContent="center"
                        >
                            <Typography>Coins : {currentCoin}</Typography>
                            <Typography>Loot Cards : {currentLoot}</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
};
