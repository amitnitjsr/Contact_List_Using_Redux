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

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div>

            <Card className='card_body'>
                <CardContent>
                    <Row className='xs'>
                        <Avatar className="bg-secondary size-80"><span style={{ fontSize: '14px' }}>MK</span></Avatar>

                    </Row>
                    <Row>Full Name</Row>
                    <Row>Designaation</Row>
                    <div style={{ textAlign: 'initial' }}>
                        <Row>
                            <Col style={{ leftAlgin: 'auto' }}>Full Name:</Col>
                            <Col>Stack</Col>
                        </Row><br />
                        <Row>
                            <Col>Email:</Col>
                            <Col>Stack</Col>
                        </Row><br />
                        <Row>
                            <Col>Phone:</Col>
                            <Col>Stack</Col>
                        </Row><br />
                        <Row>
                            <Col>Company:</Col>
                            <Col>Stack</Col>
                        </Row><br />
                        <Row>
                            <Col>Address:</Col>
                            <Col>Stack</Col>
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
