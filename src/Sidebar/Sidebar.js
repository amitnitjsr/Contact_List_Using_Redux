import React, { Component } from 'react'
import './Sidebar.css';
import { withRouter, Link } from 'react-router-dom';
import { Collapse, Button, Col, Row } from 'reactstrap';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: false,
            task: false
        }
    }
    toggle = (name) => {
        this.setState((prevState) => {
            return { [name]: !prevState[name] }
        })
    }

    render() {
        return (
            <div className="sidenav">
                <Row className='btn-pos'>
                    <i class="zmdi zmdi-format-subject"></i>
                </Row><br />&nbsp;;
                <Row className='btn-pos'>
                    <i class="zmdi zmdi-home zmdi-hc-lg"></i>
                </Row>&nbsp;&nbsp;
                <Row className='btn-pos'>
                    <i class="zmdi zmdi-account-o zmdi-hc-lg"></i>
                </Row>
            </div>
        )
    }
}

export default withRouter(Sidebar);