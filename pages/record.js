import React, { Component } from 'react';
import Router from 'next/router'
// import { Router, Route, Switch } from "react-router";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout'
import Fonts from '../components/Fonts'
import { Typography, ButtonBase, DialogTitle } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import axios from 'axios'

import Recorder from 'recorder-js';
import { recording } from '../scripts/record-script';
import { saveAs } from 'file-saver';

import { createHashHistory } from 'history'



var cors = require('cors')


const group = {
    height: "30vh",
    textAlign: "center"
}

const buttonGroup = {
    height: "10vh",
    textAlign: "center"
}

const result = {
    height: "auto",
    textAlign: "center"
}

const buttonStyle = {
    marginLeft: "20px",
    marginRight: "20px",
    minWidth: "22vmin"
}

const submitButton = {
    marginLeft: "20px",
    marginRight: "20px",
    width: "50vw"
}

// audio stuff
let isRecording = false;
let blob = null;
let audioContext, audioURL;
let recorder;


class record extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appIsMounted: false,
            recording: false,
            completedRecording: false,
            uploadData: null,
            loading: false,
            submitted: false,
            submitText: 'Submit Recording',
            fileName: null
        };
    }

    componentDidMount() {
        requestAnimationFrame(() => {
            this.setState({ appIsMounted: true });
        });

        const constraints = {audio: true};
        const cons = { audio: true }
        navigator.mediaDevices.getUserMedia(cons).then(stream => {
            audioContext =  new (window.AudioContext || window.webkitAudioContext)();
            recorder = new Recorder(audioContext)
            recorder.init(stream)
            console.log(recorder)
        })
    }

    recordStart = () => {
        // initialize the audio recorder stuff
        blob = null;
        audioURL = null;
        this.setState({recording:true});
        recorder.start();
    }

    recordStop = async () => {
        await recorder.stop().then(({blob, buffer}) => {
            blob = blob;
            audioURL = window.URL.createObjectURL(blob);
            this.setState({uploadData: blob})
        })

        this.setState({completedRecording: true})
        this.setState({recording:false});
    }

    createDownloadLink = () => {
        const fileName = new Date().toISOString();
        console.log(fileName)
    }

    recordPlay = () => {
        const a = new Audio(audioURL);
        a.play();
    }

    downloadRecording = () => {
        // this saves a local copy of the audio
        saveAs(audioURL, "lorro_record.wav");
    }

    // uploads the audio recording to the AWS server via the following 3 step process
    submitRecording = async () => {
        const data = this.state.uploadData

        let res
        let upload_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/upload"
        let process_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/process"
        
        const cors_headers = {
            // "Access-Control-Allow-Origin": "*",
            // "content-type":"application/json",
        }
        
        await axios.get(upload_url, {headers: cors_headers}).then(response => {
            console.log(response)
            res = response.data
            console.log('get success')
            this.setState({submitText:'Uploading sample....'})
        });

        console.log('res', res)

        const file_name = res.split('/')[3].split('?')[0]
        console.log(file_name)

        this.setState({fileName:file_name})

        await axios.put(res, data).then(response => {
            console.log(response)
            console.log('put success')
            this.setState({loading:true})
        })

        // route to the results page
        Router.push({
            pathname: '/results',
            query: { file: this.state.fileName }
        })
        // let phonemes = []
        // await axios.post(process_url, file_name).then(response => {
        //     console.log(response)
        //     phonemes = response.data.segmented_phonemes
        //     console.log('post success')
        //     this.setState({submitted:true, submitText:'Submitted!'})
        // })

        // console.log('phonemes', phonemes)
        // let cleanPhonemes = []
        // let prevInsert = null

        // phonemes.forEach((pho) => {
        //     if(pho != '2' && pho != prevInsert) {
        //         cleanPhonemes.push(pho);
        //         prevInsert = pho;
        //         // console.log(pho)
        //     }
        // })

        // console.log(cleanPhonemes)
    }

    render() {
        const {history} = this.props
        if (this.state.appIsMounted) {
            return (
                <div>
                    <Fonts/>
                    <Layout>
                        <Paper elevation={"1"}>
                            <Grid container spacing={24}>
                                {/* title and subtitle */}
                                <Grid item xs={12} style={group}>
                                    <Typography variant="h1" component="h3" style={{fontFamily:'Roboto'}}>
                                        Record
                                    </Typography>
                                    <Typography variant="h5">
                                        Click the record button and record an attempt to match your selected speech sample.
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} container xs={12} direction="row" justifyContent="center" alignItems="center" justify="center" alignContent="space-between">
                                    <Card className="record-card" style={{padding:10, marginBottom:'5vh', borderBottom:'3px solid #3f51b5'}}>
                                        <CardContent>
                                            <Typography gutterBottom variant="body" style={{textAlign:'center', fontFamily:'Lato'}}> Please say the following sentence: </Typography>
                                            <Typography variant="h5" style={{textDecoration:'none', fontFamily:'Lato'}}>
                                                She had your dark suit in greasy wash water all year
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                {/* start/stop buttons */}
                                <Grid style={buttonGroup} container xs={12} direction="row" justifyContent="center" alignItems="center" justify="center" alignContent="space-between">
                                    <Button
                                        style={buttonStyle}
                                        variant='contained'
                                        color='primary'
                                        onClick={this.recordStart}>
                                    Record Sample </Button>
                                    <Button
                                        style={buttonStyle}
                                        variant='contained'
                                        color='secondary'
                                        onClick={this.recordStop}
                                        disabled={!this.state.recording}>
                                    Stop Recording </Button>
                                    <Button
                                        style={buttonStyle}
                                        variant='contained'
                                        color='default'
                                        onClick={this.recordPlay}
                                        disabled={!this.state.completedRecording}> 
                                    Play Recording </Button>
                                    <Button
                                        style={buttonStyle}
                                        variant='contained'
                                        color='secondary'
                                        onClick={this.downloadRecording}
                                        disabled={!this.state.completedRecording}> 
                                    Download </Button>
                                </Grid>
                                <Grid style={buttonGroup} container xs={12} direction="row" justifyContent="center" alignItems="center" justify="center">
                                    <div>
                                        <Button
                                            style={submitButton}
                                            variant='contained'
                                            color='primary'
                                            onClick={this.submitRecording}
                                            disabled={!this.state.completedRecording}> 
                                        {this.state.submitText} </Button>
                                    </div>
                                </Grid>
                                {this.state.submitted && <Grid style={result} container xs={12} direction="row" justifyContent="center" alignItems="center" justify="center">
                                    <Card className="record-card" style={{padding:5, marginBottom:'5vh', marginTop:'5vh', borderBottom:'3px solid #43A047'}}>
                                        <CardContent>
                                            <Typography variant="h5" style={{textDecoration:'none', fontFamily:'Lato'}}>
                                                Successfully submitted your speech sample!
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>}
                            </Grid>
                        </Paper>
                    </Layout>
                </div>
            );
        } else {
            return false;
        }
    }
}

export default record