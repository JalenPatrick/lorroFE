import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout'
import Link from 'next/link'
import { Typography, ButtonBase, DialogTitle } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const headerStyles = {
    textAlign: "center",
    height: "100vh",
    marginTop:'-10',
    backgroundImage: "url(/static/images/backgrounds/reef.jpg)",
    backgroundSize: "cover"
}

const bodyStyleDark = {
    textAlign: "center",
    paddingTop:'10vh',
    backgroundColor: "#e0e0e0"
}

const bodyStyleLight = {
    textAlign: "center",
    paddingTop:'10vh',
    backgroundColor: "#fafafa"
}

export default () => (
    <Layout>
        <Paper elevation={1}>
            <Grid container spacing={24} direction="row" alignItems="center" justify="center" style={headerStyles}> 
                <Grid item xs={12} md={7}>
                    <Typography variant="h1" component="h3">
                        Lorro
                    </Typography>
                    <Typography variant="h4">
                        The Interactive Speech Training Suite
                    </Typography>
                </Grid>
                <Grid item xs={5} container alignItems="center" justify="center">
                    {/* Microphone Card */}
                    <Link href="/record">
                        <Grid item xs={12} md={7}>
                            <Card className="record-card">
                                <CardActionArea>
                                    <CardMedia
                                        style={{height: 0, paddingTop: '56.25%'}}
                                        image="/static/images/card-icons/microphone.jpg"
                                        title="Record an Audio Sample"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2"> Record an Audio Sample </Typography>
                                        <Typography component="p">
                                            Record a brand new audio sample attempting to match a target speach sample.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Link>
                    {/* Upload Card */}
                    <Link href="/upload">
                        <Grid item xs={12} md={7}>
                            <Card className="record-card" style={{marginTop:'20px'}}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{height: 0, paddingTop: '56.25%'}}
                                        image="/static/images/card-icons/tape.jpg"
                                        title="Upload an Audio Sample"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2"> Upload an Audio Sample </Typography>
                                        <Typography component="p">
                                            Upload a local audio sample for analysis.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Link>
                </Grid>
            </Grid>
            {/* Info */}
            <Grid container spacing={24} direction="row" alignItems="center" justify="center" style={bodyStyleDark}> 
                <Grid item xs={12}> 
                    <Typography variant="h2" gutterBottom>
                        What can Lorro help you with?
                    </Typography>
                </Grid>

                <Grid item xs={4}> 
                    <Typography variant="h4" gutterBottom>
                        Accent Mimicry
                    </Typography>
                </Grid>
                <Grid item xs={8}> 
                    <Typography variant="body1" gutterBottom style={{textAlign:"left", padding:"10px"}}>
                    Bacon ipsum dolor amet burgdoggen pork chop kevin alcatra jowl drumstick swine. Pork belly kielbasa t-bone, 
                    swine leberkas pancetta corned beef picanha burgdoggen pork loin drumstick porchetta. Ball tip cow pig tri-tip, 
                    fatback burgdoggen picanha. Strip steak venison capicola, meatloaf pork loin tail shankle cupim pastrami ball tip pig pancetta.
                    </Typography>
                </Grid>

                <Grid item xs={4}> 
                    <Typography variant="h4" gutterBottom>
                        Speech Disfluency
                    </Typography>
                </Grid>
                <Grid item xs={8}> 
                    <Typography variant="body1" gutterBottom style={{textAlign:"left", padding:"10px"}}>
                    Bacon ipsum dolor amet burgdoggen pork chop kevin alcatra jowl drumstick swine. Pork belly kielbasa t-bone, 
                    swine leberkas pancetta corned beef picanha burgdoggen pork loin drumstick porchetta. Ball tip cow pig tri-tip, 
                    fatback burgdoggen picanha. Strip steak venison capicola, meatloaf pork loin tail shankle cupim pastrami ball tip pig pancetta.
                    </Typography>
                </Grid>

            </Grid>
            <Grid container spacing={24} direction="row" alignItems="center" justify="center" style={bodyStyleLight}> 
                <Grid item xs={12}> 
                    <Typography variant="h2" gutterBottom>
                        How does Lorro work?
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </Layout>
)