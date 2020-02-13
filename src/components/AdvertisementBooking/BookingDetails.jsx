import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Labelbox from "../../helpers/labelbox/labelbox";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import { Tabs } from 'antd';
import Checkbox from '@material-ui/core/Checkbox';
import Report from '../../images/report.jpg'
import './BookingDetails.css'
import DealList from './DealList'
export default class BookingDetails extends React.Component{
constructor(props)
{
super(props)
   this.state={name:""}
}
 callback=(key)=>{
    console.log(key);
  }
render()
{
    const { TabPane } = Tabs;
    return(
        <div className="booking_createlist">
            <Grid container>
            <Grid item xs={12} md={6}>
                </Grid>
                <Grid item xs={12} md={6}>
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="Create Deals" key="1"> 
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Labelbox type="select" labelname="ServiceType"/>
                        <Labelbox type="datepicker" labelname="Valid From"/>
                        
                       <div className="radio_buttons"> <Labelbox type="radio"  className="radio_button" labelname="Deal Options"/></div>
                   </Grid>  
                   <Grid item xs={12} md={6} className="deal_container">
                       <Labelbox type="text" labelname="Deal Title" value="Flat off 5%"/>
                       <div className="validdate_picker"><div className="datepicker_active"><Labelbox type="datepicker"  labelname="Valid To"/></div>
                       <div className="Deal_activecheck"><Checkbox className="Deal_active_check"/><span>Deal Active</span></div></div>
                     
                   </Grid>
                   <Grid item xs={12} md={6}>
                   
                   </Grid>
                   <Grid item xs={12} md={6}>
                   <div className="createbutton-container"><Button className="create_cancel">Cancel</Button><Button className="media_save" onClick={()=>this.props.closemodal(false)}>Save</Button></div>
                   </Grid>
                   </Grid>  
                </TabPane>
                <TabPane tab="Deal List" key="2">
                    <DealList/>
                </TabPane>

               
            </Tabs>
            <div></div>
        </Grid>

        </Grid>
        </div>
    )
}
}