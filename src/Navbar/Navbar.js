import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 72;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));


function Navbar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <span>
                        <i className="zmdi zmdi-search zmdi-hc-lg"></i>
                    </span>
                    <div className="col-md-2 col-sm-2 ml-auto">
                        <Row>
                            <span>
                                <i className="zmdi zmdi-plus "></i>Add
                            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                <i className="zmdi zmdi-email zmdi-hc-lg"></i>
                            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           <span>
                                <i className="zmdi zmdi-notifications-add zmdi-hc-lg"></i>
                            </span>
                        </Row>
                    </div>
                </Toolbar>
            </AppBar>
        </div >

    );
}

export default withRouter(Navbar);