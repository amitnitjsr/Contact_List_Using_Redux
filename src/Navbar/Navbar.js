import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import './Navbar.css';
import { Divider } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
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
                        <i class="zmdi zmdi-search zmdi-hc-lg"></i>
                    </span>
                    <div className="col-md-5 col-sm-5 ml-auto">
                        <Row>
                            <Col> <i class="zmdi zmdi-plus"></i> Add</Col>
                            <Col> <i class="zmdi zmdi-email"></i></Col>
                            <Col> <i class="zmdi zmdi-notifications-none icon-alert animated infinite wobble"></i></Col>
                            <Col>
                                <i class="zmdi zmdi-notifications-add zmdi-hc-lg"></i>
                            </Col>
                        </Row>
                    </div>
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default withRouter(Navbar);