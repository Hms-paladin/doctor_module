
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import './Drawerpage.css'
import {Dropdown} from 'react-bootstrap'
import Avatar from '@material-ui/core/Avatar'
import avatar from '../../images/avatar.jpg'
import Badge from '@material-ui/core/Badge';
import bell from '../../images/bell.png'
import Logo from '../../images/Logo.png'
import home_svg from '../../images/home_svg.svg'
import queue_svg from '../../images/queue_svg.svg'
import schedule_svg from '../../images/schedule_svg.svg'
import advertise_svg from '../../images/advertise_svg.svg'
import revenue_svg from '../../images/revenue_svg.svg'
import upload_svg from '../../images/upload_svg.svg' 
import Appointment from '../../images/appointment.svg'
import Cancel from '../../images/cancel.svg'
import Availability from '../../images/availability.svg'
import Total from '../../images/total.svg'
import { Menulist,MenuItem,ListItemText,ListItemIcon, MenuList, } from "@material-ui/core";
import { Link } from "react-router-dom";
import calendar_svg from '../../images/calendar_svg.svg'
import ReactSVG from 'react-svg'
import Paper from '@material-ui/core/Paper';
import Profilepage from '../LabProfile/Profilepage'
import ProfileLogout from '../../components/ProfileLogout/ProfileLogout'
const drawerWidth = 260;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false,logout:false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  viewmodalOpen=()=>
  {
    this.setState({viewmodal:true})
  }
  viewmodalClose=()=>{
    this.setState({viewmodal:false})
  }
  logoutOpen=()=>{
    this.setState({logout:true})
    
  }
  logoutClose=()=>
  {
    this.setState({logout:false})
  }
  render() {
    const { classes, theme,children } = this.props;

    return (
      <div className="drawerpage_container">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
          <div className="drawer-logo-container"><img className="logo" src={Logo} alt="logo"/></div>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon/>
            </IconButton>
            <div className={`${this.state.open? "dropdown-container":"dropdown-container_close"}`}>
          <Dropdown >
            
            <Badge color="secondary" variant="dot"  className={classes.margin}>
         <div className="notification-icon"> <img className="notification" src={bell} /></div>
        </Badge>
  <Dropdown.Toggle variant="my_style" id="dropdown-basic" onClick={this.logoutOpen}>
    My Profile
  </Dropdown.Toggle>
 
  {/* <Dropdown.Menu className="dropdown-menu" >
     <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Log out</Dropdown.Item> 
  </Dropdown.Menu>  */}
</Dropdown>
{this.state.logout===true&&<div><ProfileLogout open={this.state.logout} onClose={this.logoutClose}/>
  </div>}
<div className="date-wrapper1">
<div className="date-wrapper2">

<large className="date">04-09-2019 10.00am</large>
</div>
</div>
</div>


          <Avatar className="Avatar-image" alt="avatar-missing" src={avatar} onClick={this.viewmodalOpen} className={classes.avatar} />
           
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />

          <MenuList className="appbar_sideicons">
          
            <MenuItem component={Link} to="/dashboard">
              <ListItemIcon>
              <div className="icon-container">
                <ReactSVG  src={home_svg}  /></div>  
               </ListItemIcon>
              <ListItemText  primary="Home" />
            </MenuItem>

            <MenuItem component={Link} to="/totaysAppointment">
              <ListItemIcon>
              <div className="icon-container">
                <ReactSVG  src={Total}/>
              </div>  
               </ListItemIcon>
               <ListItemText  primary="TodayAppointmentsDashboard" />
            </MenuItem>

            <MenuItem component={Link} to="/AppointShedule">
              <ListItemIcon>
              <div className="icon-container"><ReactSVG  src={Availability}/></div>  
               </ListItemIcon>
              <ListItemText  primary="Appointment Schedule" />
            </MenuItem>
            <MenuItem component={Link} to="/queue" >
              <ListItemIcon>
              <div className="icon-container"><ReactSVG  src={queue_svg}  /></div>
              </ListItemIcon>
              <ListItemText primary="Queue" />
            </MenuItem>
            <MenuItem component={Link} to="/cancelhistory" >
              <ListItemIcon>
              <div className="icon-container"><ReactSVG  src={Cancel}  /></div>
              </ListItemIcon>
              <ListItemText primary="Cancel History" />
            </MenuItem>
            {/* <MenuItem component={Link} to="/TodaysAppointmentmaster">
              <ListItemIcon>
              <div className="icon-container"><ReactSVG  src={calendar_svg} /></div>
              </ListItemIcon>
              <ListItemText primary="Appointments" />
            </MenuItem>
           */}
            
        
            <MenuItem component={Link} to="/revenue">
              <ListItemIcon>
              <div className="icon-container"><ReactSVG src={schedule_svg}  /></div>
              </ListItemIcon>
              <ListItemText primary="Revenue" />
            </MenuItem>
         
            <MenuItem>
              <ListItemIcon component={Link} to="/advertisement">
              <div className="icon-container"><ReactSVG src={advertise_svg}  /></div>
              </ListItemIcon>
              <ListItemText primary="Advertisement Booking" />
            </MenuItem>
        
            <MenuItem>
              <ListItemIcon>
              <div className="icon-container"><ReactSVG src={revenue_svg} /></div>
              </ListItemIcon>
              <ListItemText primary="Revenue" />
            </MenuItem>
         
            <MenuItem component={Link} to="/mediaupload">
              <ListItemIcon>
              <div className="icon-container"><div><ReactSVG src={upload_svg}  /></div></div>
              </ListItemIcon>
              <ListItemText primary="Upload Images Videos" />
            </MenuItem>
          </MenuList>


          
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div>
        {children}
        <Profilepage open={this.state.viewmodal} onClose={this.viewmodalClose}/>
  
          </div>
        </main>
      </div>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
