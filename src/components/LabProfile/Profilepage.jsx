import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Trainee from "../../images/11.jpg";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import "./Profilepage.css";
import { TiLocation, MdLocationOn, MdLocalPhone } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import EditIcon from "@material-ui/icons/Edit";
import Modalcomp from './ProfileModal'
const styles = {};
export default class Profilepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cancel: null };
  }
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };
  open=()=>
  {
  	this.setState({view:true})
  }
  onclose=()=>
  {
    this.setState({view:false})
  }
  render() {
    const styles = "";
    const { classes, onClose, cancel, selectedValue, ...other } = this.props;

    return (
      <div className="trainee_popup_details">
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          {...other}
        >
          <Grid container className="total">
            <Grid item xs={12} md={5}>
              <div className="trainee_image_container">
                <div className="trainee_image_div">
                  <img className="trainee_image" src={Trainee} />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={7} className="addtrainee_gridcontainer">
              <div className="addtraineee_containerdiv">
                <div className="icon_edit">
                  <EditIcon className="icon" onClick={this.open}/>
                </div>
                <div>
                  <h1 className="trainee_head">Dr.Abdul Rahman  </h1>
                  <p className="position">MD</p>
                  <p className="position">Exp-5 Years</p>
                  <div className="profile_age_details">
                    <h5>
                      <MdLocationOn className="group_icons"/>
                    </h5>
                    <p className="trainee_text">
                      Jabariya<span className="elipse">...</span>
                    </p>
                  </div>
                  <div className="profile_age_details">
                    <h5>
                      <MdLocalPhone className="group_icons"/>
                    </h5>
                    <p className="trainee_text">+965 220000001</p>
                  </div>
                  <div className="profile_age_details">
                    <h5>
                      <IoIosGlobe className="group_icons"/>
                    </h5>
                    <p className="trainee_text">+965 220000001</p>
                  </div>
                  <div>
                    <h4 className="working_hours">
                      <b>Personal Details</b>
                    </h4>
                  </div>
                  <div className="working_detail">
                    <h4 className="working_hour_detail">Gender</h4>

                    <p className="working_times_detail">09.30 AM-12.30 PM</p>
                  </div>
                  <div>
                    <div className="working_detail">
                      <h4 className="working_hour_detail">Date of Birth</h4>
                      <p className="working_times_detail">09.30 AM-04.30 PM</p>
                    </div>
                  </div>
                  <div>
                    <div className="working_detail">
                      <h4 className="working_hour_detail">
                        Nationality
                      </h4>

                      <p className="working_times_detail">10.30 AM-05.30 PM</p>
                    </div>
                    <div className="working_detail">
                      <h4 className="working_hour_detail">
                        Speciality
                      </h4>

                      <p className="working_times_detail">Cardiologist,Dermatologist</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                
              </div>

             
            
            </Grid>
          </Grid>
        </Dialog>
        <Modalcomp  open={this.state.view} onClose={this.onclose} title="gfffffffffffffh"/>
      </div>
    );
  }
}
const Trainer_viewWrapped = withStyles(styles)(Profilepage);
