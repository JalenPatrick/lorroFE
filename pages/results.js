import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import {start, parseFile} from './script-1';
import { Typography, ButtonBase, DialogTitle, CardContent, CardHeader, Button } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import LinearProgress from '@material-ui/core/LinearProgress';

// var fs = require('fs')
import * as V from 'victory';
import axios from 'axios'


const yourCard = {
    borderTop: "5px solid #0097a7",
    borderRadius: "5px"
}

const sampleCard = {
    borderTop: "5px solid #ec407a",
    borderRadius: "5px"
}

const loadingStyle = {
    textAlign: "center",
    marginTop:'-10',
    backgroundColor: "#e0e0e0",
    height: '100vh'
}

const displayStyle = {
    textAlign: "center",
    marginTop:'-10',
    backgroundColor: "#e0e0e0",
    height: 'auto'
}

class results extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            rawPhonemes: null,
            segmentedPhonemes: null,
            noteProgression: null
        }
    }

    componentDidMount() {
        this.setState({isLoading: true})
        // console.log(this.props)
        // console.log(window.location.search)
        const process_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/process"
        // get file name from query param
        const fileName = window.location.search.split('=')[1]
        console.log(fileName)
        
        // get info from backend and take what we need
        axios.post(process_url, fileName).then(response => {
            console.log(response)
            console.log('post success')
            const data = response.data

            const sampleLength = data.segmented_phonemes

            this.setState({
                isLoading: false,
                rawPhonemes: data.segmented_phonemes,
                segmentedPhonemes: data.backend_decoded,
                noteProgression: data.note_progression
            })
        })
    }

    render() {
    const isLoading = this.state.isLoading
    return(
        <Layout>
            {isLoading ? (
                <Paper elevation={"1"}>
                    <Grid container spacing={24} style={loadingStyle} direction="row" justifyContent="center" alignItems="center" justify="center">
                        <Grid item xs={12} md={12} style={{padding:"0 30px 0 30px"}}>
                            {/* https://s3.us-east-2.amazonaws.com/lorro/5f52814c-4865-11e9-8577-eb571fcec879.wav */}
                            <Typography variant="h2" gutterBottom> Analyzing Your Speech Sample... </Typography>
                            <LinearProgress style={{flexGrow:1}}/> 
                        </Grid>
                    </Grid>
                </Paper>
            ) : (
                <Paper elevation={"1"}>
                    <Grid item xs={12} md={12} style={{padding:"0 30px 0 30px"}}>
                        <Grid container spacing={24} style={displayStyle} direction="row" justifyContent="center" alignItems="center" justify="center">
                            {/* Summary card */}
                            <Grid item xs={12} md={12} style={{padding:"0 30px 0 30px"}}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h2" gutterBottom> Results Summary </Typography>
                                        <Typography variant="h4"> Your overall Lorro accuracy was __% </Typography>
                                        <Typography variant="body"> View a detailed breakdown of your comparisson below </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            {/* words comparison */}
                            <Grid item xs={12} md={6} style={{padding:"0 30px 0 30px"}}>
                                <Card style={yourCard}>
                                    <CardContent>
                                        <Typography variant="h4"> Words you </Typography>
                                        content goes here
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6} style={{padding:"0 30px 0 30px"}}>
                                <Card style={sampleCard}>
                                    <CardContent>
                                        <Typography variant="h4"> Words sample </Typography>
                                        content goes here
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* phoneme comparison */}
                            <Grid item xs={12} md={6} style={{padding:"0 30px 0 30px"}}>
                                <Card style={yourCard}>
                                    <CardContent>
                                        <Typography variant="h4"> Phonemes you </Typography>
                                        {this.state.segmentedPhonemes}
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6} style={{padding:"0 30px 0 30px"}}>
                                <Card style={sampleCard}>
                                    <CardContent>
                                        <Typography variant="h4"> Phonemes sample </Typography>
                                        content goes here
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* pitch comparison */}
                            <Grid item xs={12} md={6} style={{padding:"0 30px 0 30px"}}>
                                <Card style={yourCard}>
                                    <CardContent>
                                        <Typography variant="h4"> Pitch you </Typography>
                                        {this.state.noteProgression}
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6} style={{padding:"0 30px 0 30px"}}>
                                <Card style={sampleCard}>
                                    <CardContent>
                                        <Typography variant="h4"> Pitch sample </Typography>
                                        content goes here
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* pacing comparison */}
                            <Grid item xs={12} md={6} style={{padding:"0 30px 0 30px"}}>
                                <Card style={yourCard}>
                                    <CardContent>
                                        <Typography variant="h4"> Pacing you </Typography>
                                        content goes here
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6} style={{padding:"0 30px 0 30px"}}>
                                <Card style={sampleCard}>
                                    <CardContent>
                                        <Typography variant="h4"> Pacing sample </Typography>
                                        content goes here
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </Layout>  
    )}
}

export default results