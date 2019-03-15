import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout'
import Fonts from '../components/Fonts'
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
    paddingTop:'5vh',
    paddingBottom:'5vh',
    borderTop: '5px solid white',
    borderBottom: '5px solid white',
    backgroundImage: "url(/static/images/backgrounds/nelson.jpg)",
    backgroundSize: "cover"
}

const bodyStyleLight = {
    textAlign: "center",
    paddingTop:'1vh',
    borderTop: '5px solid white',
    borderBottom: '5px solid white',
    backgroundImage: "url(/static/images/backgrounds/midnight_city.jpg)",
    backgroundSize: "cover"
}

export default () => (
    <Layout>
        <Fonts/>
        <Paper elevation={1}>
            <Grid container spacing={24} direction="row" alignItems="center" justify="center" style={headerStyles}> 
                <Grid item xs={12} md={7}>
                    <div style={{}}>
                        <Typography variant="h1" component="h1" style={{color:'white', fontFamily:'Merienda', fontSize: '10vmax'}}>
                            Lorro
                        </Typography>
                        <Typography variant="h4" style={{color:'white', fontFamily:'Merienda', fontSize: '2.5vmax'}}>
                            The Interactive Speech Training Suite
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={5} container alignItems="center" justify="center">
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
                    <Typography variant="h2" gutterBottom style={{color:'white', fontFamily:'Merienda'}}>
                        How To Use Lorro
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}> 
                    <Card className="info-card" style={{marginTop:'20px', borderRadius:'15px', marginLeft:'5px'}}>
                        <div style={{textAlign:"center", fontFamily:'Roboto', backgroundImage: "url(/static/images/backgrounds/midnight_city.jpg)", padding:'15px'}}>
                            <Typography variant="h4" gutterBottom style={{color:'white', fontFamily:'Merienda'}}>
                                Choose Target Sample
                            </Typography>
                        </div>
                        <CardContent>
                            <Typography variant="body1" gutterBottom style={{textAlign:"justify", padding:"20px", fontFamily:'Roboto', fontSize:'1.2vmax'}}>
                                Your first step to sounding like your favourite celebrity or perfecting that accent is to choose your target speech sample.
                                This is going to be the voice that you are going to attempt to emulate. You can either choose from our database of existing
                                samples or upload your own.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="info-card" style={{marginTop:'20px', borderRadius:'15px'}}>
                        <div style={{textAlign:"center", fontFamily:'Roboto', backgroundImage: "url(/static/images/backgrounds/midnight_city.jpg)", padding:'15px'}}>
                            <Typography variant="h4" gutterBottom style={{color:'white', fontFamily:'Merienda'}}>
                                Upload Your Sample
                            </Typography>
                        </div>
                        <CardContent>
                            <Typography variant="body1" gutterBottom style={{textAlign:"justify", padding:"20px", fontFamily:'Roboto', fontSize:'1.2vmax'}}>
                            Once you have chosen your target sample, your next step is to record yourself attempting to replicate the nuances of the sample!
                            You either have the option to record or upload an audio sample but regardless of the method, try to ensure that your sample is audible
                            with the presence of minimal background noise.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}> 
                    <Card className="info-card" style={{marginTop:'20px', borderRadius:'15px', marginRight:'5px'}}>
                        <div style={{textAlign:"center", fontFamily:'Roboto', backgroundImage: "url(/static/images/backgrounds/midnight_city.jpg)", padding:'15px'}}>
                            <Typography variant="h4" gutterBottom style={{color:'white', fontFamily:'Merienda'}}>
                                View Results
                            </Typography>
                        </div>
                        <CardContent>
                            <Typography variant="body1" gutterBottom style={{textAlign:"justify", padding:"20px", fontFamily:'Roboto', fontSize:'1.2vmax'}}>
                            Using state of the art machine learning algorithms, Lorro will compare your speech sample with your selected target sample and provide you
                            with feedback into various aspects of your speech and guide you on how to change your pitch, pronounciation and tone to match more cloesly with
                            your uploaded sample!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={24} direction="row" alignItems="center" justify="center" style={bodyStyleLight}> 
                <Grid item xs={12}> 
                    <Typography variant="h5" gutterBottom style={{color:'white', fontFamily:'Segoe UI'}}>
                        ECE496 Capstone Project by Sever Topan, Zaid Kassar and Jalen Patrick
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </Layout>
)