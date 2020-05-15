import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './AddEditContacts.css';
import { Row, Col } from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';




export default function MediaCard(props) {
    console.log(props)

    return (
        <div>
            <Card className='card_body'>
                <CardContent>
                    <Row className='xs'>
                        <Avatar className="bg-secondary size-80" style={{ margin: 'auto' }}><span style={{ fontSize: '14px' }}>{props.data.name.match(/\b(\w)/g).join('')}</span></Avatar>
                    </Row>
                    <Row className='xs'>
                        <span style={{ margin: 'auto' }}><span style={{ fontSize: '14px' }}>{props.data.name}</span></span>
                    </Row>
                    <Row className='xs'>
                        <span style={{ margin: 'auto' }}><span style={{ fontSize: '14px' }}>{props.data.designation}</span></span>
                    </Row><br /><br />
                    <div style={{ textAlign: 'initial' }}>
                        <Row>
                            <Col style={{ leftAlgin: 'auto' }}>Full Name:</Col>
                            <Col>{props.data.name}</Col>
                        </Row><br />
                        <Row>
                            <Col>Email:</Col>
                            <Col>{props.data.email}</Col>
                        </Row><br />
                        <Row>
                            <Col>Phone:</Col>
                            <Col>{props.data.phone}</Col>
                        </Row><br />
                        <Row>
                            <Col>Company:</Col>
                            <Col>{props.data.company}</Col>
                        </Row><br />
                        <Row>
                            <Col>Address:</Col>
                            <Col>{props.data.address}</Col>
                        </Row>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small">Add</Button>
                </CardActions>
            </Card>

        </div>
    );
}
