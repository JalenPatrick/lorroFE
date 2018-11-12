import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout'
import { Typography, ButtonBase, DialogTitle } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

class results extends Component {
    constructor() {
        super()
        this.state = {isLoading: true}
    }

    render() {
    const isLoading = this.state.isLoading
    return(
        <Layout>
            <Paper elevation={"1"}>
                <Grid container spacing={24} direction="row" alignItems="center" justify="center" style={{height:"95vh"}}> 
                    <Grid item xs={12}>
                        <Typography variant='h3' gutterBottom style={{textAlign:'center'}}> Analyzing speech sample... </Typography>
                        {isLoading && 
                            <div style={{flexGrow:"1"}}>
                                <LinearProgress color="primary"/>
                            </div>
                        }
                    </Grid>
                </Grid>
            </Paper>
        </Layout>  
    )}
}

export default results