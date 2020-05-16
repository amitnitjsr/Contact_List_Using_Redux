import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import './Navbar.css';
import { Divider } from '@material-ui/core';

function Navbar(props) {

    return (
        <div>
            <nav className="navbar">
                <div className="col-md-1 col-sm-1 ml-auto">
                    <Row>
                        <Col >
                            <i class="zmdi zmdi-notifications-add"></i>
                        </Col>
                    </Row>
                </div>
                <Divider />
            </nav>
        </div >
    );
}

export default withRouter(Navbar);