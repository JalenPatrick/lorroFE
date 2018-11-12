import React, { Component } from 'react';
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


const styles = {
    textAlign: "center",
}

const pageStyles = {
    textAlign: "center",
    marginTop:'-10',
    backgroundColor: "#e0e0e0",
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

class upload extends Component {
    constructor() {
        super()
        this.state = {
            selectedFile: null,
            selectedTarget: null,
            loaded: 0
        }
    }

    changeTarget = selected => {
        this.setState({
            selectedTarget: selected
        })
    }

    handleUpload = () => {
        alert(this.state.selectedFile.name);
        const data = new FormData()
        data.append('file', this.state.selectedFile, this.state.selectedFile.name)

        // send data to endpoint via axios
        // axios.post(endpoint, data)
        //     .then(res => {
        //         console.log(res.statusText)
        //     })

        document.location.href = "/results"
    }

    handleselectedFile = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    render() {
    const fileUploaded = this.state.selectedFile
    return(
        <Layout>
            <Paper elevation={"1"}>
                <Grid container spacing={24} style={pageStyles} direction="row" justifyContent="center" alignItems="center" justify="center">
                    <Grid item xs={12} container justifyContent="center" alignItems="center" justify="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" style={styles} gutterBottom>
                                Step 1
                            </Typography>
                            <Typography variant="h5" style={styles} gutterBottom>
                                Select a speech style to match
                            </Typography>
                            <hr/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" style={styles} gutterBottom>
                                Step 2
                            </Typography>
                            <Typography variant="h5" style={styles} gutterBottom>
                                Upload your audio sample
                            </Typography>
                            <hr/>
                        </Grid>
                    </Grid>

                    <Grid item xs={6} container justifyContent="center" alignItems="center" justify="center">
                        <Grid item xs={12} md={6} className="test">
                            <Card className="record-card" style={{margin:10}} onClick={() => this.changeTarget("british-english")}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{height: 0, paddingTop: '50%'}}
                                        image="/static/images/card-icons/london.jpg"
                                        title="Record an Audio Sample"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2"> British English </Typography>
                                        <Typography component="p">
                                            Record a brand new audio sample attempting to match a target speech sample.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card className="record-card" style={{margin:10}} onClick={() => this.changeTarget("canadian-english")}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{height: 0, paddingTop: '50%'}}
                                        image="/static/images/card-icons/canada.jpg"
                                        title="Record an Audio Sample"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2"> Canadian English </Typography>
                                        <Typography component="p">
                                            Record a brand new audio sample attempting to match a target speach sample.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card className="record-card" style={{margin:10}} onClick={() => this.changeTarget("american-southern")}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{height: 0, paddingTop: '50%'}}
                                        image="/static/images/card-icons/texas.jpg"
                                        title="Record an Audio Sample"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2"> American - Southern </Typography>
                                        <Typography component="p">
                                            Record a brand new audio sample attempting to match a target speach sample.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card className="record-card" style={{margin:10}} onClick={() => this.changeTarget("american-eastern")}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{height: 0, paddingTop: '50%'}}
                                        image="/static/images/card-icons/ny.jpg"
                                        title="Record an Audio Sample"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2"> American - Eastern </Typography>
                                        <Typography component="p">
                                            Record a brand new audio sample attempting to match a target speach sample.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid item xs={6}>
                        <Grid item xs={12}>
                            <Typography variant="body1" style={styles}>
                                Upload an audio recording of you speaking attempting to match a speech sample.
                            </Typography>
                            {/* <Button
                                variant="contained"
                                color="secondary"
                                containerElement='label'
                                >
                            Choose a file
                            </Button> */}
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
            </Paper>
        </Layout>  
    )}
}

export default upload