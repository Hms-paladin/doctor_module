import React, { Component } from "react";
import plus from "../../images/plus.png";
import Grid from "@material-ui/core/Grid";
import "./DashboardMaster.css";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import DashboardTable from "./DashboardTable";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Input, Select, Icon } from 'antd';
import dateFormat from 'dateformat';
import Labelbox from '../../helpers/labelbox/labelbox'
import Paper from '@material-ui/core/Paper';
const current_date=(dateFormat(new Date(),"dd mmm yyyy"))
export default class DashboardMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClickopen = () => {
    this.setState({ open: true });
  };
  handleClickclose = () => {
    this.setState({ open: false });
  };

  render() {
    const { Search } = Input;
    console.log(dateFormat(new Date(),"dd mmm yyyy"))
    return (
      <div className="doctor_dashboard">
        <div className="uploadsmasterheader">
              <div className="titleuser">DOCTOR DASHBOARD</div>           
               {/* <div className="doctorplus-container">
              
			        <div><ButtonGroup className="clinic_group_details" size="small" aria-label="small outlined button group">
              <Button className="clinic_details">This Day</Button>
              <Button className="clinic_details">This Month</Button>
              <Button className="clinic_details">This Year</Button>
            </ButtonGroup></div>
		
            <div className="currentdate">{current_date}</div>  */}
        
                 <div className="doctorexcel_polyclinic_div"><Labelbox type="select"  value="Excel Polyclinic"/></div>
              
                
              {/* </div>  */}
          </div>
      
        <DashboardTable />
        
      </div>
    );
  }
}
