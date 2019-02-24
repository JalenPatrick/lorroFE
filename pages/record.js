import React, { Component } from 'react';
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

import axios from 'axios'

import Recorder from 'recorder-js';
import { recording } from '../scripts/record-script';
import { saveAs } from 'file-saver';


const group = {
    height: "30vh",
    textAlign: "center"
}

const buttonGroup = {
    height: "10vh",
    textAlign: "center"
}

const buttonStyle = {
    marginLeft: "20px",
    marginRight: "20px",
}

const submitButton = {
    marginLeft: "20px",
    marginRight: "20px",
    width: "50vw"
}

// audio stuff
let isRecording = false;
let blob = null;
let stream, audioContext, audioCtx, mediaRecorder, audioURL;
let chunks = [];


class record extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appIsMounted: false,
            recording: false,
            completedRecording: false,
        };
    }

    componentDidMount() {
        requestAnimationFrame(() => {
            this.setState({ appIsMounted: true });
        });

        const constraints = {audio: true};
        navigator.mediaDevices.getUserMedia(constraints).then(stream => {
            mediaRecorder = new MediaRecorder(stream)
        })
    }

    recordStart = () => {
        // initialize the audio recorder stuff
        blob = null;
        audioURL = null;
        this.setState({recording:true});
        audioContext =  new (window.AudioContext || window.webkitAudioContext)();
        mediaRecorder.start();
    }

    recordStop = () => {
        mediaRecorder.stop();

        this.setState({completedRecording: true})
        this.setState({recording:false});

        mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);
            blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
            audioURL = window.URL.createObjectURL(blob);
        }
    }

    recordPlay = () => {
        const a = new Audio(audioURL);
        a.play();
    }

    submitRecording = () => {
        alert('sending the recording to the server')
        const data = new FormData()
        data.append('sample', this.state.selectedFile)

        //send data to endpoint via axios
        axios.post("http://localhost:8080/voicecompare", data)
            .then(res => {
                console.log(res.statusText);
                console.log(res);
            }).then(() => {
                document.location.href = "/results"
            })
    }

    render() {
        if (this.state.appIsMounted) {
            return (
                <div>
                    <Layout>
                        <Paper elevation={"1"}>
                            <Grid container spacing={24}>
                                {/* title and subtitle */}
                                <Grid item xs={12} style={group}>
                                    <Typography variant="h1" component="h3">
                                        Record
                                    </Typography>
                                    <Typography variant="h5">
                                        Click the record button and record an attempt to match your selected speech sample.
                                    </Typography>
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
                                </Grid>
                                <Grid style={buttonGroup} container xs={12} direction="row" justifyContent="center" alignItems="center" justify="center">
                                    <div>
                                        <Button
                                            style={submitButton}
                                            variant='contained'
                                            color='primary'
                                            onClick={this.submitRecording}
                                            disabled={!this.state.completedRecording}> 
                                        Submit Recording </Button>
                                    </div>
                                </Grid>
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