import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fonts from '../components/Fonts'


const styles = {
    marginLeft: 10
}

const Header = () => (
    <div>
        <Fonts/>
        <AppBar position="static" color="primary">
            <Toolbar>
                <Link href="../">
                    <Typography variant="h5" color="inherit" gutterBottom style={{fontFamily:'Merienda'}}>
                        Lorro
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
)

export default Header