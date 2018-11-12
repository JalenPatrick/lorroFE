import Header from './Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = (props) => (
    <CssBaseline>
        <Header />
        <div>
            {props.children}
        </div>
    </CssBaseline>
)

export default Layout