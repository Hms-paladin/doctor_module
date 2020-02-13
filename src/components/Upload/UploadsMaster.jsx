import React, { Component } from "react";
import plus from "../../images/plus.png";
import Grid from "@material-ui/core/Grid";
import "./UploadsMaster.css";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import Uploadform from "./Uploadform";
import Uploaddetails from "./Uploaddetails";

export default class UploadsMaster extends Component {
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
    return (
      <div className="uploadmaster">
        <div className="doctoruploadsmasterheader">
         
              
            
             <div><p className="doctor_upload_text">Uploads</p></div>
                <img
                  className="plus-icon"
                  src={plus}
                  alt={"hi"}
                  onClick={this.handleClickopen}
                />
              </div>
           
         
        
        <Uploaddetails />
        <div className="Upload-modal-container">
          <Modalcomp
            visible={this.state.open}
            closemodal={this.handleClickclose}
            title={"Create a User"}
          >
            <Uploadform />
          </Modalcomp>
        </div>
      </div>
    );
  }
}
