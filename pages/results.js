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

import Fonts from '../components/Fonts'
import { 
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Label,
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from 'recharts';

// var fs = require('fs')
import * as V from 'victory';
import axios from 'axios'


const yourCard = {
    borderTop: "5px solid #0097a7",
    borderRadius: "5px"
}

const sampleCard = {
    borderTop: "5px solid #ec407a",
    borderRadius: "5px",
    margin: "5vh 0 5vh 0",
}

const scoreCard = {
    border: "5px solid #ec407a",
    borderRadius: "5px",
    margin: "5vh 0 5vh 0",
    // width: "50%"
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

const wrap = {
    overflowWrap: "break-word",
    wordWrap: "break-word"
}

class results extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            rawPhonemes: null,
            segmentedPhonemes: null,
            noteProgression: null,
            frequencies: null
        }
    }

    async componentDidMount() {
        this.setState({isLoading: true})
        // console.log(this.props)
        // console.log(window.location.search)
        const process_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/process"
        
        // get file name from query param
        const test = new URLSearchParams(window.location.search)
        const tar = test.get('target');
        const file = test.get('file')

        // const target

        const sendObj = {
            file: file,
            target: tar
        }

        const stringfied = JSON.stringify(sendObj)
        console.log('results', JSON.stringify(sendObj))

        let transcribe
        
        // get info from backend and take what we need
        await axios.post(process_url, stringfied).then(response => {
            console.log('result -', response)
            console.log('post success - result')
            const sampleData = response.data.sample_data
            const targetData = response.data.target_data
            const res = response.data

            this.setState({
                isLoading: false,
                rawPhonemes: sampleData.segmented_phonemes,
                segmentedPhonemes: sampleData.backend_decoded,
                noteProgression: sampleData.note_progression,
                frequencies: sampleData.fundamental_frequencies,
                t_rawPhonemes: targetData.segmented_phonemes,
                t_segmentedPhonemes: targetData.backend_decoded,
                t_noteProgression: targetData.note_progression,
                t_frequencies: targetData.fundamental_frequencies,
                wordCompare: res.compare_transcribe,
                freqScore: res.freq_diff_score,
                ppAccuracyScore: res.postprocessed_accuracy_score,
                rawAccuracyScore: res.raw_accuracy_score
            })
            console.log(this.state)
        })
    }

    getFreqData = (freqArray, phonemeArray, notesArray) => {
        console.log(freqArray)
        console.log(phonemeArray)
        console.log(notesArray)
        let dataArray = []

        if (freqArray && phonemeArray && notesArray)
            for (let i = 0; i < freqArray.length; i++) {
                let dataObject = {
                    freq: Math.round(freqArray[i]),
                    phoneme: phonemeArray[i],
                    note: notesArray[i]
                }
                dataArray.push(dataObject)
            }
        console.log(dataArray)
        if (dataArray) {
            return dataArray;
        } else {
            getFreqData(freqArray, phonemeArray, notesArray);
        }
        
    }

    // used to contruct the radial plot which displays the users accuracy to the target sample
    // based on 3 main fields
    // 1. Pitch --> average spoken word frequency over the sample
    // 2. Word Accuracy --> how correct the words are (use confidence from AWS)
    // 3. Timing --> raw duration of the samples
    getCompareData = (freq, timing, phonemes) => {
        const pitchObject = {
            category: "Pitch Matching",
            value: Math.round(freq),
            fullMark: 100 
        }

        const wordAccuracyObject = {
            category: "Word Matching",
            value: 90,
            fullMark: 100 
        }

        const phonemeAccuracyObject = {
            category: "Phoneme Matching",
            value: Math.round(phonemes),
            fullMark: 100 
        }
        
        const timingObject = {
            category: "Timing Matching",
            value: Math.round(timing),
            fullMark: 100 
        }

        const dataArray = [pitchObject, wordAccuracyObject, phonemeAccuracyObject, timingObject]
        return dataArray;
    }

    generateScore = (freq, timing, phonemes) => {
        return ((freq + timing + phonemes + 90)/4).toFixed(2);
    }

    wordMatching = (raw) => {
        if (raw) {
            const parsed = JSON.parse(raw);
            const interpreted = parsed.results.transcripts[0].transcript;
            return interpreted;
        }     
    }

    playTarget = (target_url) => {
        const audio = new Audio(target_url);
        audio.play();
        console.log(target_url);
    }

    render() {
    const isLoading = this.state.isLoading
    const freqSampleData = this.getFreqData(this.state.frequencies, this.state.rawPhonemes, this.state.noteProgression)
    const freqTargetData = this.getFreqData(this.state.t_frequencies, this.state.t_rawPhonemes, this.state.t_noteProgression)
    const compareGraphData = this.getCompareData(this.state.freqScore, this.state.ppAccuracyScore, this.state.rawAccuracyScore)
    const wordMatching = this.wordMatching(this.state.wordCompare);
    const lorroScore = this.generateScore(this.state.freqScore, this.state.ppAccuracyScore, this.state.rawAccuracyScore)
    const test = new URLSearchParams(window.location.search)
    const tar = test.get('target');
    const file = test.get('file');

    // console.log(tar, file);

    const target_url = 'https://s3.us-east-2.amazonaws.com/lorro/' + tar + '.wav';
    const sample_url = 'https://s3.us-east-2.amazonaws.com/lorro/' + file;
    // console.log(sample_url, target_url)


    return(
        <Layout>
        <Fonts/>
            {isLoading ? (
                <Paper elevation={"1"}>
                    <Grid container spacing={24} style={loadingStyle} direction="row" justifyContent="center" alignItems="center" justify="center">
                        <Grid item xs={12} md={12} style={{padding:"0 30px 0 30px"}}>
                            <Typography variant="h2" gutterBottom style={{color:'black', fontFamily:'Merienda', fontSize: '7vmax'}}> Analyzing Your Speech Sample... </Typography>
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
                                <Card style={scoreCard}>
                                    <CardContent>
                                        <Typography variant="h2" gutterBottom> Lorro Score </Typography>
                                        <Typography variant="h2" style={{fontFamily:'Merienda', fontSize:'15vmax', color:'#8884d8'}}> {lorroScore} </Typography>
                                    </CardContent>
                                </Card>
                                
                                {/* Recorded Sample */}
                                <Card style={sampleCard}>
                                    <CardContent>
                                        <Typography variant="h2" gutterBottom> Sample Frequencies </Typography>
                                        {/* <Typography variant="h4"> Your overall Lorro accuracy was __% </Typography>
                                        <Typography variant="body"> View a detailed breakdown of your comparisson below </Typography> */}
                                        <Typography variant="h4" gutterBottom> Fundamental frequencies vs. spoken phoneme </Typography>
                                        <Typography variant="body"> Hover over the chart to see the phoneme spoken and what pitch it was spoken at </Typography>
                                        <ResponsiveContainer width='100%' aspect={4.0/2.0}>
                                        <AreaChart data={freqSampleData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="phoneme">
                                                <Label value="Detected Phoneme" offset={10} position="bottom" />
                                            </XAxis>
                                            <YAxis label={{ value: 'Fundamental Frequency (hz)', angle: -90, position: 'insideLeft'}}/>
                                            <Tooltip />
                                            <Area type="monotone" dataKey="freq" stroke="#8884d8" fill="#8884d8" unit="hz" activeDot={{ r: 8 }} />
                                            <Area type="monotone" dataKey="note" stroke="#8884d8" dot={false} />
                                        </AreaChart>
                                        </ResponsiveContainer>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => this.playTarget(sample_url)}
                                        > Play Sample </Button>
                                        <Typography variant="subtitle" style={{margin: '20px 0px 0px 0px'}}> Here's what we think you said: </Typography>
                                        <Typography variant="h6" style={{margin: '20px 0px 0px 0px', color: '#8884d8'}}> {wordMatching} </Typography>
                                    </CardContent>
                                </Card>

                                {/* Target Sample */}
                                <Card style={sampleCard}>
                                    <CardContent>
                                        <Typography variant="h2" gutterBottom> Target Frequencies </Typography>
                                        {/* <Typography variant="h4"> Your overall Lorro accuracy was __% </Typography>
                                        <Typography variant="body"> View a detailed breakdown of your comparisson below </Typography> */}
                                        <Typography variant="h4" gutterBottom> Fundamental frequencies vs. spoken phoneme </Typography>
                                        <Typography variant="body"> Hover over the chart to see the phoneme spoken and what pitch it was spoken at </Typography>
                                        <ResponsiveContainer width='100%' aspect={4.0/2.0}>
                                        <AreaChart data={freqTargetData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="phoneme">
                                                <Label value="Detected Phoneme" offset={10} position="bottom" />
                                            </XAxis>
                                            <YAxis label={{ value: 'Fundamental Frequency (hz)', angle: -90, position: 'insideLeft'}}/>
                                            <Tooltip />
                                            <Area type="monotone" dataKey="freq" stroke="#81C784" fill="#81C784" unit="hz" activeDot={{ r: 8 }} />
                                            <Area type="monotone" dataKey="note" stroke="#81C784" dot={false} />
                                        </AreaChart>
                                        </ResponsiveContainer>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => this.playTarget(target_url)}
                                        > Play Target </Button>
                                    </CardContent>
                                </Card>

                                
                                <Card style={sampleCard}>
                                    <CardContent>
                                        <Typography variant="h2" gutterBottom> Comparision to Sample </Typography>
                                        <ResponsiveContainer width='100%' aspect={4.0/2.0}>
                                        <RadarChart data={compareGraphData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                            <PolarGrid />
                                            <PolarAngleAxis dataKey="category" />
                                            <PolarRadiusAxis />
                                            <Tooltip />
                                            <Radar name='accuracy' unit='%' dataKey='value' stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                        </RadarChart>
                                        </ResponsiveContainer>
                                    </CardContent>
                                </Card>

                                <Card style={sampleCard}>
                                    <CardContent>
                                        <Typography variant="h2" gutterBottom> View Raw Data </Typography>
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary>
                                                <Typography variant="body" gutterBottom style={{textAlign: "center"}}> Click to open </Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Grid container spacing={24} direction="row" justifyContent="center" alignItems="center" justify="center">
                                                    {/* Summary card */}
                                                    <Grid item xs={12} md={12} style={{margin:"0 15px 0 5px", width:'100%'}}>
                                                        <Typography variant="h5" gutterBottom> Phonemes </Typography>
                                                        <Typography style={wrap} variant="body"> {this.state.segmentedPhonemes} </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} md={12} style={{margin:"0 15px 0 5px", width:'100%'}}>
                                                        <Typography variant="h5" gutterBottom> Note Progression </Typography>
                                                        <Typography style={wrap} variant="body"> {this.state.noteProgression} </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} md={12} style={{margin:"0 15px 0 5px", width:'100%'}}>
                                                        <Typography variant="h5" gutterBottom> Fundamental Frequencies </Typography>
                                                        <Typography style={wrap} variant="body"> {this.state.frequencies} </Typography>
                                                    </Grid>
                                                </Grid>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
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