import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Labelbox from '../../helpers/labelbox/labelbox'
import Button from '@material-ui/core/Button';
import './ViewMedia.css'
import uploadimage from '../../images/upload-button.png'
import Profile from '../../images/1.jpg' 
export default class ViewMedia extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} md={6} className="media_title_container">
                    <Labelbox type="text" labelname="Media Title" />
                    <p className="media_active">Active</p>
                    </Grid>
                    <Grid item xs={12} md={6} className="media_title_container"> 
                    <img src={Profile}/>    
                    </Grid>
                </Grid>
            </div>
        )
    }
}
