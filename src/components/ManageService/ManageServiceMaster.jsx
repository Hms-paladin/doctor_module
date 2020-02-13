import React, { Component } from "react";
import plus from "../../images/plus.png";
import Grid from "@material-ui/core/Grid";
import "./ManageServiceMaster.css";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import MediaServiceModal from "./ManageServiceModal";
import MediaServiceTable from "./ManageServiceTable";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Input, Select, Icon } from 'antd';
import dateFormat from 'dateformat';
const current_date=(dateFormat(new Date(),"dd mmm yyyy"))
export default class ManageServiceMaster extends Component {
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
      <div className="manageservicemaster">
        <div className="uploadsmasterheader">
              <div className="managetitleuser">MANAGE SERVICES</div>
           
            <div className="doctorplus-container">
			      {this.state.open==true?<div style={{width:"100%"}}><ButtonGroup className="clinic_group_details" size="small" aria-label="small outlined button group">
              <Button className="clinic_details">This Day</Button>
              <Button className="clinic_details">This Month</Button>
              <Button className="clinic_details">This Year</Button>
            </ButtonGroup></div>:""}
		        </div>
           <div className="current_container">
             {/* <div className="currentdate">{current_date}</div> */}
            <Search
              placeholder=" search "
              onSearch={value => console.log(value)}
              style={{ width: 150 }}
              />
                <img
                  className="plus-icon"
                  src={plus}
                  alt={"hi"}
                  onClick={this.handleClickopen}
                />
                </div>
             
          </div>
      
        <MediaServiceTable />
        <div className="Upload-modal-container">
          <Modalcomp
            visible={this.state.open}
            closemodal={this.handleClickclose}
            title={"Add Service"}
          >
            <MediaServiceModal visible={this.state.open}
            closemodal={this.handleClickclose}/>
          </Modalcomp>
        </div>
      </div>
    );
  }
}
