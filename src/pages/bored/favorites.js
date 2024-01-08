import React from "react";
import { Grid, Button, Header } from 'semantic-ui-react';

export default function FavoriteActivities() {
    const appState = useAppState();

    return (
        <>
       <Grid columns={1}>
        <Grid.Column>
            <Header as='h1'>{appState.user}'s Favorite Activities</Header>
        </Grid.Column>
        <Grid.Column>
            
        </Grid.Column>
       </Grid>
        </>
    );  
}