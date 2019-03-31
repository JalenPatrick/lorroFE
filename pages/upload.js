import React, { Component } from 'react';
import Router from 'next/router'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout'
import { Typography, ButtonBase, DialogTitle } from '@material-ui/core';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Radio from '@material-ui/core/Radio';
import Particles from 'react-particles-js';


const styles = {
    textAlign: "center",
}

const styles2 = {
    textAlign: "center",
    marginTop:'200'
}

const pageStyles = {
    textAlign: "center",
    marginTop:'-10',
    backgroundColor: "#e0e0e0",
}

const loadingStyle = {
    textAlign: "center",
    marginTop:'-10',
    backgroundColor: "#475372",
    height: '100vh'
}

const buttonStyle = {
    width: "0.1px",
    height: "0.1px",
    opacity: 0,
    overflow: "hidden",
    position: "absolute",
    zIndex: -1
}

const labelStyle = {
    fontSize: "1.25em",
    fontWeight: 700,
    color: "white",
    backgroundColor: "black",
    display: "inline-block",
    padding: '15px',
    marginTop: '10px',
    borderRadius: '10px',
    border: '1px solid white'
}

const sampleGroup = {
    textAlign: "center",
    paddingBottom: "50px"
}

const selectCards = {
    magin: '0px 20px 10px 20px',
    borderBottom:'3px solid #03A9F4'
}


class upload extends Component {
    constructor() {
        super()
        this.state = {
            selectedFile: null,
            selectedTarget: null,
            loaded: 0,
            loading: false,
            submitted: false,
            fileName: null,
            selectedTarget: null
        }
    }

    changeTarget = selected => {
        this.setState({
            selectedTarget: selected
        })
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

    handleUpload = async () => {
        const data = this.state.selectedFile
        //data.append('sample', this.state.selectedFile)

        console.log(data)

        let res
        let upload_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/upload"
        let process_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/process"
        await axios.get(upload_url, {headers: {}}).then(response => {
            console.log(response)
            res = response.data
            console.log('get success')
            this.setState({submitted: true})
        });
        console.log('res', res)

        const file_name = res.split('/')[3].split('?')[0]
        console.log(file_name)

        this.setState({fileName:file_name})

        await axios.put(res, data).then(response => {
            console.log(response)
            console.log('put success')
        })

        // route to the results page
        Router.push({
            pathname: '/results',
            query: { target: this.state.selectedTarget, file: this.state.fileName }
        })

        // await axios.post(process_url, file_name).then(response => {
        //     console.log(response)
        // })
    }

    handleselectedFile = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    render() {
    const fileUploaded = this.state.selectedFile
    const isLoading = this.state.loading
    return(
        <Layout>
            <Paper elevation={"1"}>
                {!this.state.submitted ? (
                    <Grid container spacing={24} style={pageStyles} direction="row" justifyContent="center" alignItems="center" justify="center">
                        <Grid item xs={12} container justifyContent="center" alignItems="center" justify="center">
                            <Grid style={sampleGroup} container xs={12} direction="row" justifyContent="center" alignItems="center" justify="center" alignContent="space-between">
                                <Grid item xs={12} md={12}>
                                        <Typography variant="h4" style={styles} gutterBottom>
                                            Step 1
                                        </Typography>
                                        <Typography variant="h5" style={styles} gutterBottom>
                                            Select target audio sample
                                        </Typography>
                                        <hr/>
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
                            <Grid item xs={12} md={12}>
                                <Typography variant="h4" style={styles} gutterBottom>
                                    Step 2
                                </Typography>
                                <Typography variant="h5" style={styles} gutterBottom>
                                    Upload your audio sample
                                </Typography>
                                <hr/>
                            </Grid>
                        </Grid>
    
                        <Grid item xs={12}>
                            <Grid item xs={12}>
                                <Typography variant="body1" style={styles}>
                                    Upload an audio recording of you speaking attempting to match a speech sample.
                                </Typography>
                                <input type="file" accept=".wav" name="file" id="file" class="inputfile" onChange={this.handleselectedFile} style={buttonStyle}/>
                                <label for="file" style={labelStyle}> Choose An Audio File</label>
                            </Grid>
                            <Grid item xs={12} style={{padding: 10, margin: 10}}>
                                {fileUploaded &&
                                    <div>
                                        <Typography variant='caption'> {this.state.selectedFile.name} </Typography>
                                        <Button variant="contained" color="secondary" onClick={this.handleUpload}> Upload </Button>
                                    </div>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                        ) : (
                            <Grid container spacing={24} style={loadingStyle} direction="row" justifyContent="center" alignItems="center" justify="center">
                                <Grid item xs={12} md={12} style={{padding:"0 30px 0 30px"}}>
                                    <Typography variant="h2" gutterBottom style={{color:'white', fontFamily:'Merienda', fontSize: '7vmax', marginTop: '20px'}}> Uploading Your Speech Sample... </Typography>
                                    <LinearProgress style={{flexGrow:1}}/>
                                </Grid>
        
                                <Grid item xs={12} md={12}>
                                    <Particles
                                        params={{
                                            "particles": {
                                                "number": {
                                                    "value": 50
                                                },
                                                "size": {
                                                    "value": 5
                                                }
                                            }
                                        }} />
                                </Grid>
                            </Grid>
                    )}
            </Paper>
        </Layout>  
    )}
}

export default upload