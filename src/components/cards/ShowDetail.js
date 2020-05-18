import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './ShowDetail.css';
import { Row, Col } from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';
import ColorName from '../data/ColorData';


class ShowDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date,
        }
    }

    render() {
        return (
            <div>
                <Card className='card_body'>
                    <CardContent>
                        <Row className='xs'>
                            <Avatar style={{
                                margin: 'auto',
                                backgroundColor: ColorName[Math.floor(Math.random() * ColorName.length)]
                            }}>
                                <span style={{
                                    fontSize: '14px',

                                }}>
                                    {this.props.data.name ? this.props.data.name.match(/\b(\w)/g).join('') : null}</span>
                            </Avatar>
                        </Row>
                        <Row className='xs'>
                            <span style={{ margin: 'auto' }}><span style={{ fontSize: '14px' }}>{this.props.data.name}</span></span>
                        </Row>
                        <Row className='xs'>
                            <span style={{ margin: 'auto' }}><span style={{ fontSize: '14px' }}>{this.props.data.designation}</span></span>
                        </Row><br /><br />
                        <div style={{ textAlign: 'initial' }}>
                            <Row>
                                <Col style={{ leftAlgin: 'auto' }}>Full Name:</Col>
                                <Col>{this.props.data.name}</Col>
                            </Row><br />
                            <Row>
                                <Col>Email:</Col>
                                <Col>{this.props.data.email}</Col>
                            </Row><br />
                            <Row>
                                <Col>Phone:</Col>
                                <Col>{this.props.data.phone}</Col>
                            </Row><br />
                            <Row>
                                <Col>Company:</Col>
                                <Col>{this.props.data.company}</Col>
                            </Row><br />
                            <Row>
                                <Col>Address:</Col>
                                <Col>{this.props.data.address}</Col>
                            </Row>
                        </div>
                    </CardContent>
                </Card>
                <br />
                <Card className='card_body'>
                    <CardContent>
                        <Row className='xs'>
                            <span style={{ margin: 'auto' }}><span style={{ fontSize: '14px' }}>Tax Evasion & Payout Notice</span></span>
                        </Row>
                        <Row className='xs'>
                            <span style={{ margin: 'auto' }}><span style={{ fontSize: '14px' }}>{this.props.date}</span></span>
                        </Row>
                    </CardContent>
                </Card>
            </div >
        );
    }
}

export default ShowDetails;

