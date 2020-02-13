import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Labelbox from "../../helpers/labelbox/labelbox";
import Button from "@material-ui/core/Button";
import "./ManageServiceModal.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Upload } from "antd";

export default class ManageServiceMaster extends Component {
  render() {
    return (
      <div className="manage_service">
         
             <div className="service_type_container"> <div className="clinictotal_div"><Labelbox
                className="label-box"
                labelname="Service Type"
                type="text"
              />
              </div>
            <div ><Labelbox
                className="label-box"
                labelname="Total (KWD)"
                type="text"
              />
              </div>
           </div>
            
          <div className="clinicbutton-container">
            <Button className="clinicCancel">Cancel</Button>
            <Button className="clinicSubmit" onClick={()=>this.props.closemodal(false)}>Submit</Button>
          </div>
          
      </div>
    );
  }
}
