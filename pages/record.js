import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout'
import { Typography, ButtonBase, DialogTitle } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = {
    textAlign: "center",
}

const cardStyles = {
    media: {
        height: 0,
        marginTop: '30'
    }
}

const images = [
    {
        url: '/static/images/card-icons/microphone.jpg',
        title: 'Record Audio Sample',
        width: '40%',
    },
    {
        url: '/static/images/card-icons/green.jpg',
        title: 'Upload Audio Sample',
        width: '40%',
    },
]

export default () => (
    <Layout>
        <Paper elevation={"1"}>
            <Grid container spacing={24}>
                {/* title and subtitle */}
                <Grid item xs={12}>
                    <Typography variant="h1" component="h3" style={styles}>
                        Record
                    </Typography>
                    <Typography variant="h4" style={styles}>
                        The interactive speech training suite
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </Layout>
)