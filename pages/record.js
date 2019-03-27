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
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';

import Radio from '@material-ui/core/Radio';

import axios from 'axios'
import Recorder from 'recorder-js';
import { recording } from '../scripts/record-script';
import { saveAs } from 'file-saver';

import { createHashHistory } from 'history'



var cors = require('cors')


const group = {
    height: "25vh",
    textAlign: "center"
}

const buttonGroup = {
    height: "auto",
    padding: "20px 0px 20px 0px",
    textAlign: "center",
}

const sampleGroup = {
    textAlign: "center",
    paddingBottom: "50px"
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

const loadingStyle = {
    textAlign: "center",
    marginTop:'-10',
    backgroundColor: "#e0e0e0",
    height: '100vh'
}

const selectCards = {
    magin: '0px 20px 10px 20px',
    borderBottom:'3px solid #03A9F4'
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
            fileName: null,
            selectedTarget: null
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

    playTarget = (target_url) => {
        const audio = new Audio(target_url);
        audio.play();
        console.log(target_url);
    }

    handleChange = event => {
        console.log(event.target.value)
        this.setState({ selectedTarget: event.target.value });
        console.log(this.state.selectedTarget)
    };

    // uploads the audio recording to the AWS server via the following 3 step process
    submitRecording = async () => {
        const data = this.state.uploadData
        this.setState({submitted:true});
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
            query: { target: this.state.selectedTarget, file: this.state.fileName }
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
                        {!this.state.submitted ? (
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

                                <Grid container xs={12} direction="row" justifyContent="center" alignItems="center" justify="center" alignContent="space-between">
                                    <Card className="record-card" style={{padding:10, marginBottom:'5vh', borderBottom:'3px solid #3f51b5'}}>
                                        <CardContent>
                                            <Typography gutterBottom variant="body" style={{textAlign:'center', fontFamily:'Lato'}}> Please say the following sentence: </Typography>
                                            <Typography variant="h5" style={{textDecoration:'none', fontFamily:'Lato'}}>
                                                She had your dark suit in greasy wash water all year
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>


                                <Grid style={sampleGroup} container xs={12} direction="row" justifyContent="center" alignItems="center" justify="center" alignContent="space-between">
                                    <Grid item xs={12} md={12} style={{padding:"0 30px 0 30px", margin:'0px 0px 15px 0px'}}>
                                        <Typography variant="h5">
                                            Step 1: Select a Target Speech Sample
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={2} style={{padding:"0 30px 0 30px"}}>
                                        <Card style={selectCards}>
                                            <CardContent>
                                                <Typography gutterBottom variant="body" style={{textAlign:'center', fontFamily:'Lato'}}> Southern </Typography>
                                                <Radio
                                                    checked={this.state.selectedTarget === 'target-sample-JDM1-southern'}
                                                    onChange={this.handleChange}
                                                    value='target-sample-JDM1-southern'
                                                />
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => this.playTarget('https://s3.us-east-2.amazonaws.com/lorro/target-sample-JDM1-southern.wav')}
                                                > Play </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} md={2} style={{padding:"0 30px 0 30px"}}>
                                        <Card style={selectCards}>
                                            <CardContent>
                                                <Typography gutterBottom variant="body" style={{textAlign:'center', fontFamily:'Lato'}}> Wisconsin </Typography>
                                                <Radio
                                                    checked={this.state.selectedTarget === 'target-sample-DLD0-wisconsin'}
                                                    onChange={this.handleChange}
                                                    value='target-sample-DLD0-wisconsin'
                                                />
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => this.playTarget('https://s3.us-east-2.amazonaws.com/lorro/target-sample-DLD0-wisconsin.wav')}
                                                > Play </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} md={2} style={{padding:"0 30px 0 30px"}}>
                                        <Card style={selectCards}>
                                            <CardContent>
                                                <Typography gutterBottom variant="body" style={{textAlign:'center', fontFamily:'Lato'}}> Western </Typography>
                                                <Radio
                                                    checked={this.state.selectedTarget === 'target-sample-REH0-western'}
                                                    onChange={this.handleChange}
                                                    value='target-sample-REH0-western'
                                                />
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => this.playTarget('https://s3.us-east-2.amazonaws.com/lorro/target-sample-REH0-western.wav')}
                                                > Play </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} md={2} style={{padding:"0 30px 0 30px"}}>
                                        <Card style={selectCards}>
                                            <CardContent>
                                                <Typography gutterBottom variant="body" style={{textAlign:'center', fontFamily:'Lato'}}> New England </Typography>
                                                <Radio
                                                    checked={this.state.selectedTarget === 'target-sample-VMH0-new-england'}
                                                    onChange={this.handleChange}
                                                    value='target-sample-VMH0-new-england'
                                                />
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => this.playTarget('https://s3.us-east-2.amazonaws.com/lorro/target-sample-VMH0-new-england.wav')}
                                                > Play </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>



                                {/* start/stop buttons */}
                                <Grid style={buttonGroup} container xs={12} direction="row" justifyContent="center" alignItems="center" justify="center" alignContent="space-between">
                                    <Divider variant='inset'/>
                                    <Grid item xs={12} md={12} style={{padding:"0 30px 0 30px", margin:'0px 0px 15px 0px'}}>
                                        <Typography variant="h5">
                                            Step 2: Record and Upload Your Sample
                                        </Typography>
                                    </Grid>
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
                        ) : (
                            <Grid container spacing={24} style={loadingStyle} direction="row" justifyContent="center" alignItems="center" justify="center">
                                <Grid item xs={12} md={12} style={{padding:"0 30px 0 30px"}}>
                                    {/* https://s3.us-east-2.amazonaws.com/lorro/5f52814c-4865-11e9-8577-eb571fcec879.wav */}
                                    <Typography variant="h2" gutterBottom style={{color:'black', fontFamily:'Merienda', fontSize: '7vmax'}}> Submitting Your Speech Sample... </Typography>
                                    <LinearProgress style={{flexGrow:1}}/> 
                                </Grid>
                            </Grid> 
                        )} 
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