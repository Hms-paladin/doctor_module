import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { lighten, makeStyles, fade } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Icon, message, Popconfirm } from 'antd';
import Grid from '@material-ui/core/Grid';
// import Modalcomp from '../../Components/ModalComp/Modalcomp'
import './AppointmentDetails.css'
// import ClinicApproval from '../Clinic approval/ClinicApproval';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Divider } from 'antd';
import { Select } from 'antd';
import { Input } from 'antd';
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function createData(name, emp_name, type_leave, from, to, leave_reason, status) {
  return { name, emp_name, type_leave, from, to, leave_reason, status };
}



function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  console.log("sort", array)
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    console.log("order", order);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headRows = [
  { id: 'sno', label: 'S.no' },
  { id: 'session', label: 'Session' },
  { id: 'slot', label: 'Slot' },
  { id: 'from time', label: 'From Time' },
  { id: 'to time', label: 'To Time' },
  { id: 'slot duration', label: 'Slot Duration' },
  { id: 'no of slots', label: 'No. of slots' },
  { id: 'vip', label: 'VIP' },

];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>

        <Table
          className="table headertablesub"
          aria-labelledby="tableTitle"
        >

        <TableHead>
            <TableRow
              hover
              role="checkbox"
              tabIndex={-1}
            >
<TableCell align="right" style={{width:9}}>Sno</TableCell>
<TableCell align="right" style={{width:80}}>Session</TableCell>
<TableCell align="right" style={{width:40}}>Slots</TableCell>
<TableCell align="right" style={{width:100}}>From Time</TableCell>
<TableCell align="right" style={{width:80}}>To Time</TableCell>
<TableCell align="right" style={{width:20}}>Slot Duration</TableCell>
<TableCell align="right" style={{width:20}}>No. of slots</TableCell>
<TableCell align="right" style={{width:10}}>VIP</TableCell>

            </TableRow>
          </TableHead>
        </Table>
        {/* {headRows.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? 'right' : 'left'}
            padding={row.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === row.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}
            >
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}  */}


      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    // backgroundColor:'white',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      // width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },

}));




export default class Availabilitydetails extends Component {

  constructor(props) {
    super(props);
    function createData(media_title, media_type, upload_on) {
      return { media_title, media_type, upload_on };
    }

    this.state = {
      order: '', orderBy: 'media_title', selected: [], page: 0, dense: false, rowsPerPage: 5, viewmodal: false, doctordetails:
        [createData(),
        createData(),
        createData(),
     
        ], viewdata: null
    };
  }

  handleRequestSort = (event, property) => {
    const isDesc = this.state.orderBy === property && this.state.order === 'desc';
    this.setState({ order: isDesc ? 'asc' : 'desc' });
    this.setState({ orderBy: property });
  }

  closemodal = () => {
    this.setState({ viewmodal: false });
  }

  // loadDoctorDetails(){
  //   fetch(Config.api_url+'getDoctorDetails', {
  //             method: 'POST',
  //             headers: {
  //               Accept: 'application/json',
  //               'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({}),
  //           }).then((response) => response.json())
  //           .then((responseJson) => {
  //             // console.log("doctor",responseJson);
  //             this.setState({doctordetails:responseJson.data})
  //           })
  // }


  handleClick = (event, name) => {
    const selectedIndex = this.state.selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected.push(this.state.selected, name);
    } else if (selectedIndex === 0) {
      // newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === this.state.selected.length - 1) {
      // newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      // newSelected = newSelected.concat(
      //   selected.slice(0, selectedIndex),
      //   selected.slice(selectedIndex + 1),
      // );
    }
    this.setState({ selected: newSelected });

  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  }

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: +event.target.value });
    this.setState({ page: 0 })
  }

  handleChangeDense(event) {
    this.setState({ dense: event.target.checked })
  }
  componentWillMount() {
    //this.loadDoctorDetails();
  }
  ViewDetails = (data) => {
    console.log("viewdata", data);
    this.setState({ viewmodal: true, viewdata: data });
  }
  DeleteData = (data) => {

    console.log("deletedata", data);
  }
  receiveapprovaldata = (data, data1) => {
    console.log("receiveapproval", data);
    console.log("data1", data1);
    if (data1 == 1) {
      this.setState({ viewmodal: false });
      message.success("Your Leave Approved");
      this.loadVendorDetails();

    } else if (data1 == 2) {
      this.setState({ viewmodal: false });
      message.success("Your Leave Rejected");
      this.loadVendorDetails();

    }
  }
  receivedocdelete = (data) => {
    console.log("receivedocdelete", data);
    if (data.status == 0) {
      this.setState({ viewmodal: false });
      message.success(data.msg);
      this.loadDoctorDetails();
    }
  }
  sendapprovadata = (data) => {
    if (data.status == 0) {
      this.setState({ viewmodal: false });
      message.success(data.msg);
      this.loadDoctorDetails();
    }
  }
  // confirm = (data) => {
  //   console.log("dekte", data);
  //   message.loading('Action in progress..')
  //   fetch(Config.api_url + 'deleteDoctorDetails', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       "doctorId": data.doctorId
  //     }),
  //   }).then((response) => response.json())
  //     .then((responseJson) => {
  //       if (responseJson.status == 0) {
  //         this.loadDoctorDetails();
  //         message.success(responseJson.msg)

  //       } else {
  //         message.error(responseJson.msg);
  //       }

  //     })
  // }
  render() {
    const isSelected = name => this.state.selected.indexOf(name) !== -1;


    return (
      <div className="AvailabilityDetailsDiv" >

        <Paper className="paper">
          <div className="tableWrapper">
            <Table
              className="table"
              aria-labelledby="tableTitle"
              size={this.state.dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                numSelected={this.state.selected.length}
                order={this.state.order}
                orderBy={this.state.orderBy}
                // onSelectAllClick={this.handleSelectAllClick}
                onRequestSort={this.handleRequestSort}
                rowCount={this.state.doctordetails.length}
              />
              <TableBody>
                {stableSort(this.state.doctordetails, getSorting(this.state.order, this.state.orderBy))
                  .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                  .map((row, index, item) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    console.log("rendering", row)
                    return (

                      <TableRow
                        hover
                        onClick={event => this.handleClick(event, row.name)}
                        role="checkbox"
                        tabIndex={-1}
                        key={row.name}
                      >

                        <Table
                          className="table subtable"
                          aria-labelledby="tableTitle"
                          size={this.state.dense ? 'small' : 'medium'}
                        >

                          <TableBody>
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                            >
                              <TableCell component="th" id={labelId} scope="row" padding="none">
                                <div className="Availability-sno-wrapper">  {((this.state.rowsPerPage * this.state.page - 1) + index + 2)} </div>
                              </TableCell>
                              <TableCell align="right"><Select className="availability-clinic-toggledropdown" defaultValue="Morning" style={{ width: 100 }} onChange={handleChange}>
                                <Option className="availability-clinic-toggledropdown" value="morning">Morning</Option>
                                <Option className="availability-clinic-toggledropdown" value="afternoon">Afternoon</Option>
                                <Option className="availability-clinic-toggledropdown" value="evening">Evening</Option>
                              </Select> </TableCell>




                              <TableCell align="right"><Input value="4" style={{ width: 40 }} /></TableCell>
                              <TableCell align="right"><Input value="10.00 AM" style={{ width: 100 }} /></TableCell>
                              <TableCell align="right"><Input value="4.00 PM" style={{ width: 100 }} /></TableCell>

                              <TableCell align="right" className="Abi"><Input value="4" style={{ width: 60 }} /><label className="slot-duration-unit_label">Min</label></TableCell>
                              <TableCell align="right"><div className="no_of_slots_data">8</div></TableCell>
                              <TableCell align="right"><Checkbox className="active-checkbox" icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                checkedIcon={<CheckBoxIcon fontSize="small" />} /></TableCell>
                              <TableCell align="right"></TableCell>
                            </TableRow>




                            <TableRow
                              hover
                              role="checkbox"
                            >
                              <TableCell align="right" colSpan={8}>
                              
                                <FormGroup row className="Availability-checkbox-row-div">
      <FormControlLabel style={{ width:80}}
        control={
          <Checkbox  value="checkedA" />
        }
        label="All"
      />
            <FormControlLabel style={{ width:80}}
        control={
          <Checkbox  value="checkedA" />
        }
        label="SUN"
      />
            <FormControlLabel style={{ width:80}}
        control={
          <Checkbox  value="checkedA" />
        }
        label="MON"
      />
            <FormControlLabel style={{ width:80}}
        control={
          <Checkbox  value="checkedA" />
        }
        label="TUE"
      />
            <FormControlLabel style={{ width:80}}
        control={
          <Checkbox  value="checkedA" />
        }
        label="WED"
      />
      <FormControlLabel style={{ width:80}}
        control={
          <Checkbox  value="checkedA" />
        }
        label="THU"
      />
      <FormControlLabel style={{ width:80}}
        control={
          <Checkbox  value="checkedA" />
        }
        label="FRI"
      />
      <FormControlLabel style={{ width:80}}
        control={
          <Checkbox  value="checkedA" />
        }
        label="SAT"
      />
      
      
      </FormGroup>
      <div className="delete_container"><DeleteIcon className="delete_icon"/></div>
      </TableCell>
         </TableRow>

             </TableBody>
                        </Table>
                        {/* <TableCell component="th" id={labelId} scope="row" padding="none">
                       <div className="Availability-sno-wrapper">  {((this.state.rowsPerPage*this.state.page-1)+index+2)} </div>
                      </TableCell>
                      <TableCell align="right"><Select className="availability-clinic-toggledropdown" defaultValue="Morning" style={{ width: 120 }} onChange={handleChange}>
      <Option className="availability-clinic-toggledropdown" value="morning">Morning</Option>
      <Option className="availability-clinic-toggledropdown" value="afternoon">Afternoon</Option>
      <Option className="availability-clinic-toggledropdown" value="evening">Evening</Option>
   </Select> </TableCell>
                      
                      
                      
                      
                      <TableCell align="right"><Input value="4" style={{ width: 40 }}/></TableCell>
                      <TableCell  align="right"><Input value="10.00 AM" style={{ width: 100 }}/></TableCell>
                      <TableCell align="right"><Input value="4.00 PM" style={{ width: 100 }}/></TableCell>
                      
                     <TableCell align="right"><Input value="4" style={{ width: 60 }}/><label className="slot-duration-unit_label">Min</label></TableCell>
                    <TableCell align="right"><div className="no_of_slots_data">8</div></TableCell>
                      <TableCell align="right"><Checkbox className="active-checkbox" icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}/></TableCell>
                   <TableCell align="right"></TableCell> */}


                      </TableRow>


                    );
                  })}

              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={this.state.doctordetails.length}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />



        </Paper>
        {/* {this.state.viewmodal == true &&
          <Modalcomp visible={true} title="VIEW DOCTOR DETAILS" closemodal={this.closemodal}>
            <ClinicApproval sendapprovaldata={this.state.viewdata} sendapprovadata={(data) => this.sendapprovadata(data)} cancelClick={() => this.setState({ viewmodal: false })} receiveapprovaldata={(data, data1) => this.receiveapprovaldata(data, data1)} senddocdelete={(data) => this.receivedocdelete(data)} senddocdetails={this.state.viewdata} /></Modalcomp>
        } */}
      </div>
    )
  }
}