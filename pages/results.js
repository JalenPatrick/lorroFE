import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import {start} from './script-1';
import { Typography, ButtonBase, DialogTitle, CardContent, CardHeader, Button } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import * as V from 'victory';

const dummyData = [
    {x: "correct", y: 3},
    {x: "incorrect", y: 1},
]


const headerStyle = {
    textAlign: "center",
    backgroundColor: "#e0e0e0"
}

const subheaderStyle = {
    textAlign: "center",
    backgroundColor: "#e0e0e0"
}

class results extends Component {
    constructor() {
        super()
        this.state = {isLoading: true}
    }

    componentDidMount() {
        start();
    }

    render() {
    const isLoading = this.state.isLoading
    return(
        <Layout>
            <Paper elevation={"2"}>
                <Grid container spacing={24} direction="row" alignItems="center" justify="center" style={headerStyle}>
                    <Grid item xs={12}>
                        <Typography component="h2" variant="h1" gutterBottom> Results </Typography>
                    </Grid>
                </Grid>
            </Paper>

            <Paper elevation={"2"}>
                <Grid container spacing={24} direction="row" alignItems="center" justify="center" style={subheaderStyle}>
                    {/* Overall Lorro Score */}
                    <Grid item xs={12} md={8}>
                        <Card>
                            <CardHeader
                                title="Lorro Score"
                                subheader="Overall assessment of similarity between your sample and the selected sample"
                                style={{backgroundColor:"#EC407A", borderBottom:"2px solid black"}}
                            />
                            <CardContent>
                                <p> Bacon ipsum dolor amet ball tip beef ribs shankle tail doner chuck hamburger tri-tip pancetta sirloin. Flank sirloin rump ground round ham ribeye tri-tip t-bone prosciutto spare ribs turkey alcatra. Sirloin pork chop leberkas capicola. Kevin buffalo porchetta frankfurter chicken. Short loin sirloin beef meatball. Hamburger tongue fatback tail chicken.

Ham biltong corned beef, cupim cow boudin pork belly doner shoulder rump pork loin porchetta drumstick. Porchetta flank ground round, beef ribs leberkas rump biltong venison swine cow chuck short ribs bresaola ham boudin. Venison turkey shoulder pork, hamburger bacon pork belly capicola corned beef frankfurter tongue flank cow. Andouille turducken biltong cupim leberkas. Pastrami rump swine pork chop pancetta alcatra jerky chicken. Ham hock pork belly andouille buffalo, swine meatloaf landjaeger biltong shank hamburger pig.</p>
                            </CardContent>
                        </Card> 
                    </Grid>
                    
                    {/* Uploaded transcription card */}
                    <Grid item xs={12} md={5}>
                        <Card>
                            <CardHeader
                                title="Speech Sample Transcription"
                                subheader="Here's what we think you said"
                                style={{backgroundColor:"#EC407A", borderBottom:"2px solid black"}}
                            />
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    <div className="result-2"> </div>
                                </Typography>
                            </CardContent>
                        </Card> 
                    </Grid>

                    {/* Target sample transcription card */}
                    <Grid item xs={12} md={5}>
                        <Card>
                            <CardHeader
                                title="Target Sample Transcription"
                                subheader="Here's what was said in the selected target sample"
                                style={{backgroundColor:"#EC407A", borderBottom:"2px solid black"}}
                            />
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    hello hello hello
                                </Typography>
                            </CardContent>
                        </Card> 
                    </Grid>

                    {/* Word accuracy card */}
                    <Grid item xs={12} md={8} style={{padding:"2px"}}>
                        <Card>
                            <CardHeader
                                title="Word Accuracy"
                                subheader="Ratio of words pronounced correctly compared to the selected target sample"
                                style={{backgroundColor:"#EC407A", borderBottom:"2px solid black"}}
                            />
                            <CardContent>
                                <V.VictoryPie
                                    data={dummyData}
                                    colorScale={["#4CAF50", "#f44336"]}
                                />
                            </CardContent>
                        </Card> 
                    </Grid>

                    {/* Uploaded pitches card */}
                    <Grid item xs={12} md={5}>
                        <Card>
                            <CardHeader
                                title="Speech Sample Pitch Profile"
                                subheader="Here is a breakdown of your pitches throughout the sample"
                                style={{backgroundColor:"#EC407A", borderBottom:"2px solid black"}}
                            />
                            <CardContent>
                                <div className="result"></div>
                                <br/>
                                <Button variant="contained" color="default" className="play_button"> Listen
                                    {/* <button className="play_button"> Play </button> */}
                                </Button>
                            </CardContent>
                        </Card> 
                    </Grid>

                    {/* Target sample pitches card */}
                    <Grid item xs={12} md={5}>
                        <Card>
                            <CardHeader
                                title="Target Sample Pitch Profile"
                                subheader="Here is a breakdown of your pitches for the target sample"
                                style={{backgroundColor:"#EC407A", borderBottom:"2px solid black"}}
                            />
                            <CardContent>
                                <Typography component="h2" variant="h5" style={{height:"30.5vh"}}>
                                    WIP
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Grpahs Card */}
                    <Grid item xs={12} md={8}>
                        <Card>
                            <CardHeader
                                title="Technical Graphs"
                                subheader="View waveform, frequency progression and spectograms of your voice"
                                style={{backgroundColor:"#EC407A", borderBottom:"2px solid black"}}
                            />
                            <CardContent>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>Show Graphs</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                    <Grid container spacing={24} direction="row" alignItems="center" justify="center">
                                        <Grid item xs={12}>
                                            <Typography variant="h5" gutterBottom> Signal Waveform </Typography>
                                            <img src="/static/images/results/signal.png"/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h5" gutterBottom> Fundamental Frequencies </Typography>
                                            <img src="/static/images/results/fundamental_frequencies.png"/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h5" gutterBottom> Spectrogram </Typography>
                                            <img src="/static/images/results/spectrogram.png"/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className="result-3"></div>
                                        </Grid>
                                        <Grid item hidden>
                                            <audio controls className="audio">
                                                <source src="/static/images/results/sample.wav" type="audio/wav"/>
                                            </audio>
                                        </Grid>
                                    </Grid>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>

            <div style={{height:"200px"}}></div>


            <Paper elevation={"1"}>
                <Grid container spacing={24} direction="row" alignItems="center" justify="center" justifyContent="center" style={{height:"auto"}}> 
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom> Signal Waveform </Typography>
                        <img src="/static/images/results/signal.png"/>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom> Fundamental Frequencies </Typography>
                        <img src="/static/images/results/fundamental_frequencies.png"/>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom> Spectrogram </Typography>
                        <img src="/static/images/results/spectrogram.png"/>
                    </Grid>

                    <Grid item xs={12}>
                        <audio controls className="audio">
                            <source src="/static/images/results/sample.wav" type="audio/wav"/>
                        </audio>
                    </Grid>

                    <Grid item xs={12}>
                        <div className="result"></div>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <button className="play_button"> Play </button>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="result-2"></div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="result-3"></div>
                    </Grid>
                </Grid>
            </Paper>
        </Layout>  
    )}
}

export default results