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
import "./ProfileView.css";
import { TiLocation, MdLocationOn, MdLocalPhone } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import EditIcon from "@material-ui/icons/Edit";
import Patient from '../../images/1.jpg'
import { BrowserRouter, Switch, Route,NavLink } from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const styles = {};
export default class ProfileView extends React.Component {
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
      <div className="doctor_popup_details">
      
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          {...other}
          className="profile_modal"
        >
            <div><img src={Patient} className="patient"/></div>
         <div className="doctor_dashboard_view">
         <div className="doctor_details_container">
            <div className="doctor_detailsdiv">
           <h3 className="patient_name">Abdul Khadher</h3>
           <p className="patient_age">45 Years</p>
           <p className="patientappointment_details">Appointment Details</p>
           
           <div className="patientappointment_details"><p className="patientappointment_details">Date<span className="patient_date">08 Dec 2019</span></p></div>
           <div className="patientappointment_details-div"><p className="patientappointment_details">Time<span className="patient_date">09:15AM</span></p></div>
          
           <div className="patientappointment_details"><Button component={NavLink} to="/viewdetails" variant="contained" className="view_detailsbutton">View <ChevronRightIcon className="right_arrowview"/></Button></div>
           <Divider className="divider_root"/>
          
         </div>
         </div>
         </div>
        </Dialog>
        
      </div>
    );
  }
}
const Trainer_viewWrapped = withStyles(styles)(ProfileView);
