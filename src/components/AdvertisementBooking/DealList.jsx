import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Labelbox from "../../helpers/labelbox/labelbox";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import Report from '../../images/report.jpg'
import './DealList.css'
import { Progress } from 'antd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Chart, Axis, Legend, Tooltip, Geom } from 'bizcharts';
const data = [
  { month: 'Jan.', count: 69, city: 'tokyo' }
];
const scale = {
  month: {alias: 'Month',},
  count: {alias: 'Sales',},
};
export default class DealList extends React.Component{
constructor(props)
{
super(props)
   this.state={name:""}
}
render()
{
    return(
       <div>
           <div className="paper_maincontainer">
           <Grid container>
                           <Grid item xs={12} md={12} className="reportcontainer">
                               <Paper className="firstpaper_test">
                                   <Grid container>
                                       <Grid item xs={12} md={6}>
                                   <div className="date_view"><h5 className="list_test_report">All</h5></div>
                                   <div className="date_view"><p>18 06 2020 - 20 07 2010</p></div>
                                   </Grid>
                                   <Grid item xs={12} md={6}>
                                   <h5 className="list_test_report">Flat 30 KWD off</h5>
                                   <p className="view">Deal Active</p>
                                   <div className="iconsdiv"><EditIcon className="edit_icon_div"/>
                                   <DeleteIcon className="delete_icon_div"/></div>
                                       </Grid>
                                   </Grid>
                               </Paper>
                               <Paper className="firstpaper_test">
                               <Grid container>
                                       <Grid item xs={12} md={6}>
                                   <div className="date_view"><h5 className="list_test_report">Acrylic Dentures</h5></div>
                                   <div className="date_view"><p>18 06 2020 - 20 07 2010</p></div>
                                   </Grid>
                                   <Grid item xs={12} md={6}>
                                   <h5 className="list_test_report">10% off</h5>
                                   <p className="view">Deal Active</p>
                                   <div className="iconsdiv"><EditIcon className="edit_icon_div"/>
                                   <DeleteIcon className="delete_icon_div"/></div>
                                       </Grid>
                                   </Grid>
                               </Paper>
                               <Paper className="firstpaper_test">
                               <Grid container>
                                       <Grid item xs={12} md={6}>
                                   <div className="date_view"><h5 className="list_test_report">All</h5></div>
                                   <div className="date_view"><p>18 06 2020 - 20 07 2010</p></div>
                                   </Grid>
                                   <Grid item xs={12} md={6}>
                                   <h5 className="list_test_report">Flat 30 KWD off</h5>
                                   <p className="view">Deal Active</p>
                                   <div className="iconsdiv"><EditIcon className="edit_icon_div"/>
                                   <DeleteIcon className="delete_icon_div"/></div>
                                       </Grid>
                                   </Grid>
                               </Paper> 
                           </Grid>     
                    </Grid>
             
           </div>
       </div>
    )
}
}