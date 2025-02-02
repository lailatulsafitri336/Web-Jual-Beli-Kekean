import React from 'react';
import Hero from '../components/Hero'
import Filter from '../components/Filter';
import Container from '@mui/material/Container'
import { CssBaseline, Grid } from '@mui/material';
import MainPage from './MainPage'
import Carousel from 'react-material-ui-carousel/dist/components/Carousel';
import {useParams} from 'react-router-dom';

function Main(props) {
    const {locale} = useParams();

    return (
        <div>
            <Container sx={{px: {mobile: 5, laptop: 10}}}>
                <Hero/>
                <Grid spacing={0} container sx={{mt:{laptop: 15, mobile: 7}}}>
                    <Grid sx={{display: {mobile: 'none', laptop: 'flex'}}} item laptop={2}>
                        <Filter/>
                    </Grid>
                    <Grid item laptop={10} mobile={12}>
                        <MainPage/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Main;
