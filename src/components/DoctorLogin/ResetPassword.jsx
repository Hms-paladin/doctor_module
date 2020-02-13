import React, { Component } from 'react';
import Paper from '@material-ui/core/Card'
import Logo from '../../images/Logo.png';
import TextField from '@material-ui/core/TextField';
import Submitimage from '../../images/login-button image.png';
import Checkbox from '@material-ui/core/Checkbox'
import Clinic from '../../images/trainer.jpg'
import './ResetPassword.css'
import Grid from '@material-ui/core/Grid';
import Email from '../../images/envelope.png'
import Eye from '../../images/eye.svg'
import SearchIcon from "@material-ui/icons/Search";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Pharmacy from '../../images/doctorlogin.png'
import CheckIcon from '@material-ui/icons/Check';
import {
  BrowserRouter as Router,
  Switch,
  Route,NavLink,Link
} from "react-router-dom";
import Modalcomp from '../../helpers/ModalComp/Modalcomp';
import SuccessMsg from './Success';
export default class DoctorLogin extends Component {
  constructor(props)    
  {
    super(props);
     this.state={password:"",hidden:true,open:false}
  }
  handleOpen=()=>
  {
    this.setState({open:true})
  }
  handleClose=()=>
  {
    this.setState({open:false})
  }
  toggleshow=()=>
  {
    this.setState({hidden:!this.state.hidden})
    console.log("i am clicked",this.state.hidden)
  }
  onchange=(e)=>
  {
    this.setState({password:e.target.value})
  }

    render() {
  
       return (
              <div className="pharmacy_login_container">
              <Grid container>
              <Grid item xs={12} md={7} className="pharmacy_image_grid">
                    <div className="pharmacy_image_container">
                    <div className="pharmacy_image_div">
                    <div className="pharmacy_image_login">
                    <div>
                       <img src={Pharmacy} alt="1" className="pharmacy_image"/>
                     
                        </div>
                    </div>
                  </div>
                  </div>
                    </Grid>
               
       <Grid item xs={12} md={5} className="pharmacy_grid_container">
       <div className="pharmacy_main_container">
        
         <div className="pharmacy_paper_div">
              <div className="pharmacy_text_container">
              <div className="logo_container"><div className="logo_div"><img className="logo_image" src={Logo}/></div></div>
                 <div className="pharmacy_Welcometext-container"><p className="Welcometext">RESET PASSWORD</p></div>
                 <div className="pharmacy_email_container"><TextField   type="text"  type={this.state.hidden ? "password" : "text"} onChange={this.onchange}  value={this.state.password}   label="New Password"

                  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
        <img className="logineye_icon" src={Eye} onClick={this.toggleshow}/>
        
        </IconButton>
      </InputAdornment>
    )
  }}/>
                 </div>
                 
                 <div className="confirm_container"><TextField  type="text"  placeholder="" className="trrainer_password" label="Confirm Password"  
                 
                  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
        <CheckIcon className="confirm_password" />
        </IconButton>
      </InputAdornment>
    )
  }}/>
                 
                 </div>
                 <div className="login_button_container">
                 <button className="login" onClick={this.handleOpen}>Submit</button>
                 </div>
                 <div className="cancel_container">
                   <a to="/forgot">
                     <span className="cancelbutton">Cancel</span>
                    </a>
                   </div>
                </div>
                       </div>
                       </div>
              </Grid>
                    
                 
                </Grid>
                <Modalcomp visible={this.state.open} title="Success" closemodal={this.handleClose}>
                  <SuccessMsg/>
                </Modalcomp>
                </div>
                      

                )
            }
        }
       