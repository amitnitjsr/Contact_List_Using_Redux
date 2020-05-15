import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import './common.css'
import AddEditContact from './AddEditContacts';
import ReactTable from './ReactTable';
export default function MediaCard() {


    return (

        <div >
            {/* <div className="column" >
                <div style={{ width: '850px', paddingLeft: '102px' }}> */}
            <ReactTable />
            {/* </div>
            </div>
            <div className="column" >
                <AddEditContact />
            </div> */}
        </div>
    );
}
