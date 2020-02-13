import React, { Component } from "react";
import "./RevenueMaster.css";
import { Select } from "antd";
import "antd/dist/antd.css";
import Moment from "react-moment";
import Revenuedetails from "./Revenuedetails";
import { Input } from "antd";
import Button from '@material-ui/core/Button';
import Plus from '../../images/plus.png'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import dateFormat from 'dateformat';
import Labelbox from "../../helpers/labelbox/labelbox";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
const current_date=(dateFormat(new Date(),"dd mmm yyyy"))
class RevenueMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "rrr"
    };
  }

  render() {
    const { Option } = Select;
    const { Search } = Input;
    console.log(dateFormat(new Date(),"dd mmm yyyy"))
    return (
      <div className="doctor_revenue">
          
          <div className="uploadsmasterheader">
         <div className="patient_type_div"> <div className="titlerevenue">REVENUE</div>
  
           <div style={{width:"190px"}} className="revenueclinic_container"><Labelbox type="select" value="Clinic" style={{width:"150px"}} labelname="Type"/></div></div>
           {/* <div style={{width:"150px"}}><Labelbox type="select" value="Walk-In" style={{width:"150px"}}/></div> */}
           
           
              <div className="group_buttons_div">
			       <ButtonGroup className="clinic_group_details" size="small" aria-label="small outlined button group">
              <Button className="clinic_details">This Day</Button>
              <Button className="clinic_details">This Month</Button>
              <Button className="clinic_details">This Year</Button>
            </ButtonGroup>
		
            <div className="currentdate"><FaChevronLeft className="current_left"/>{current_date}<FaChevronRight className="current_right"/></div>
            <div className="seacrh_revenue"><Search
              placeholder=" search "
              onSearch={value => console.log(value)}
              style={{ width: 150 }}
              /></div>
              
             
          </div>
          </div>
        <Revenuedetails />
      </div>
    );
  }
}

export default RevenueMaster;
