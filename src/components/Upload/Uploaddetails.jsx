import React, { Component } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { lighten, makeStyles, fade } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Icon, message, Popconfirm } from "antd";
import "./Uploaddetails.css";
// import Config from "../helpers/config";
// import ClinicApproval from '../Clinic approval/ClinicApproval';
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ordericon from "../../images/ordericon.png";
function createData(
  name,
  emp_name,
  type_leave,
  from,
  to,
  leave_reason,
  status
) {
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
  console.log("sort", array);
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
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const headRows = [
  { id: "order", label: "Order" },
  { id: "sno", label: "S.no" },
  { id: "media_title", label: "Media title" },
  { id: "media_type", label: "Media Type" },
  { id: "upload_on", label: "Upload On" },
  { id: "action", label: "Action" },
  { id: "active", label: "Active" }
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headRows.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? "right" : "left"}
            padding={row.disablePadding ? "none" : "default"}
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
        ))}
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
  rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: "0 0 auto"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    // backgroundColor:'white',
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      // width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export default class Uploaddetails extends Component {
  constructor(props) {
    super(props);
    function createData(media_title, media_type, upload_on) {
      return { media_title, media_type, upload_on };
    }

    this.state = {
      order: "",
      orderBy: "media_title",
      selected: [],
      page: 0,
      dense: false,
      rowsPerPage: 5,
      viewmodal: false,
      doctordetails: [
        createData("Offer 10%", "Image", "28 Dec 2019 10.00"),
        createData("Offer 15%", "Image", "22 Aug 2019 10.00"),
        createData("Offer 20%", "Video", "19 Jun 2019 10.00"),
        createData("Offer 40%", "Image", "12 Aug 2019 10.00"),
        createData("Offer 20%", "Video", "02 Aug 2019 10.00"),
        createData("Offer 30%", "Video", "12 Aug 2019 10.00"),
        createData("Offer 25%", "Image", "20 Mar 2019 10.00")
      ],
      viewdata: null
    };
  }

  handleRequestSort = (event, property) => {
    const isDesc =
      this.state.orderBy === property && this.state.order === "desc";
    this.setState({ order: isDesc ? "asc" : "desc" });
    this.setState({ orderBy: property });
  };

  closemodal = () => {
    this.setState({ viewmodal: false });
  };

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
  };

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: +event.target.value });
    this.setState({ page: 0 });
  };

  handleChangeDense(event) {
    this.setState({ dense: event.target.checked });
  }
  componentWillMount() {
    //this.loadDoctorDetails();
  }
  ViewDetails = data => {
    console.log("viewdata", data);
    this.setState({ viewmodal: true, viewdata: data });
  };
  DeleteData = data => {
    console.log("deletedata", data);
  };
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
  };
  receivedocdelete = data => {
    console.log("receivedocdelete", data);
    if (data.status == 0) {
      this.setState({ viewmodal: false });
      message.success(data.msg);
      this.loadDoctorDetails();
    }
  };
  sendapprovadata = data => {
    if (data.status == 0) {
      this.setState({ viewmodal: false });
      message.success(data.msg);
      this.loadDoctorDetails();
    }
  };
  // confirm = data => {
  //   console.log("dekte", data);
  //   message.loading("Action in progress..");
  //   fetch(Config.api_url + "deleteDoctorDetails", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       doctorId: data.doctorId
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       if (responseJson.status == 0) {
  //         this.loadDoctorDetails();
  //         message.success(responseJson.msg);
  //       } else {
  //         message.error(responseJson.msg);
  //       }
  //     });
  // };
  render() {
    const isSelected = name => this.state.selected.indexOf(name) !== -1;

    return (
      <div className="VendorDetailsDiv">
        <Paper className="paper">
          <div className="tableWrapper">
            <Table
              className="table"
              aria-labelledby="tableTitle"
              size={this.state.dense ? "small" : "medium"}
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
                {stableSort(
                  this.state.doctordetails,
                  getSorting(this.state.order, this.state.orderBy)
                )
                  .slice(
                    this.state.page * this.state.rowsPerPage,
                    this.state.page * this.state.rowsPerPage +
                      this.state.rowsPerPage
                  )
                  .map((row, index, item) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    console.log("rendering", row);
                    return (
                      <TableRow
                        hover
                        onClick={event => this.handleClick(event, row.name)}
                        role="checkbox"
                        tabIndex={-1}
                        key={row.name}
                      >
                        <TableCell align="right">
                          <div className="ordericon-container">
                            <img className="ordericon" src={ordericon} />
                          </div>
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {this.state.rowsPerPage * this.state.page -
                            1 +
                            index +
                            2}
                        </TableCell>

                        <TableCell align="right">{row.media_title}</TableCell>
                        <TableCell align="right">{row.media_type}</TableCell>
                        <TableCell align="right">{row.upload_on}</TableCell>

                        <TableCell align="right">
                          <div>
                            <Icon
                              type="eye"
                              theme="filled"
                              onClick={() => this.ViewDetails(row)}
                              style={{ padding: "5px" }}
                            />

                            <Icon type="edit" theme="filled" />
                            <Popconfirm
                              title="Are you sure want to delete?"
                              onConfirm={() => this.confirm(row)}
                              onCancel={this.cancel}
                              okText="Yes"
                              cancelText="No"
                            >
                              <Icon
                                type="delete"
                                theme="filled"
                                style={{ padding: "5px" }}
                              />
                            </Popconfirm>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          <Checkbox
                            className="active-checkbox"
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                          />
                        </TableCell>
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
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    );
  }
}
