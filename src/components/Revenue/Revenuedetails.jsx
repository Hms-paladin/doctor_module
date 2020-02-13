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
import crowngold from "../../images/crown-golden.png";
import { Icon, message, Popconfirm } from "antd";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import "./Revenuedetails.css";

import { FaMobileAlt, FaEye, FaMale, FaWalking } from "react-icons/fa";
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
  { id: "sno", label: "S.no" },
  { id: "type", label: "" },
  { id: "patient", label: "Customer" },
  { id: "date", label: "Date" },
  { id: "cash", label: "Cash" },
  { id: "Card", label: "Card" },
  { id: "insurance", label: "Insurance" },
  { id: "wallet", label: "Wallet" },
  { id: "totalcharge", label: "Total Charge (KWD)" },
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
// const Trainer_viewWrapped = Profilepage;

export default class Revenuedetails extends Component {
  constructor(props) {
    super(props);
    function createData(type, patient, date, cash, Card, insurance, wallet,totalcharge)
       {
      return { type, patient, date, cash, Card, insurance, wallet,totalcharge };
    }

    this.state = {
      order: "",
      open: false,
      orderBy: "media_title",
      selected: [],
      page: 0,
      dense: false,
      rowsPerPage: 5,
      viewmodal: false,
      doctordetails: [
        createData(
          <FaWalking className="react-icon-wal" />,
          "Abdul",
          "10 Dec 2020",
          "0",
          "400",
          "1000",
          "0",
        

          "1400"
        ),
        createData(
          <FaMobileAlt className="revreact-icon-mob" />,
          "MOHAMED",
          "05 Dec 2020",
          "500",
          "400",
          "1000",
          "0",
          "1900"
        ),
        createData(
          <FaWalking className="react-icon-wal" />,
          "RAM",
          "08 Dec 2020",
          "0",
          "400",
          "1000",
          "100",
          "1500"
        )
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
  // handleClickopenicon = () => {
  //     this.setState({ open: true });
  // };
  // handleclose = value => {
  //     this.setState({ open: false });
  // };
  //   handleClickcloseicon = () => {
  //     this.setState({ open: false });
  //   };
  //   confirm=(data)=> {
  //   console.log("dekte",data);
  //   message.loading('Action in progress..')
  //          fetch(Config.api_url+'deleteDoctorDetails', {
  //             method: 'POST',
  //             headers: {
  //               Accept: 'application/json',
  //               'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({
  //               "doctorId":data.doctorId
  //             }),
  //           }).then((response) => response.json())
  //           .then((responseJson) => {
  //             if(responseJson.status==0){
  //             this.loadDoctorDetails();
  //         message.success(responseJson.msg)

  //            }else{
  //               message.error(responseJson.msg);
  //             }

  //           })
  // }
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
                        <TableCell align="right">{row.type}</TableCell>

                        <TableCell align="right">{row.patient}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.cash}</TableCell>
                        <TableCell align="right">{row.Card}</TableCell>
                        <TableCell align="right">{row.insurance}</TableCell>

                        <TableCell align="right">{row.wallet}</TableCell>
                        <TableCell align="right">{row.totalcharge}</TableCell>
                        {/* <TableCell className="cell_eye" align="right">
                          <Icon
                            type="eye"
                            theme="filled"
                            className="eyeicon"
                            onClick={this.handleClickopenicon}
                          />
                        </TableCell> */}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
            <div className="docrevenue_total"><div className="totalkwd"><p className="grand_total">Grand Total</p><span className="grand_total">:</span><p className="revtotal_amt">4800 KWD</p></div></div>
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
        {/* <Trainer_viewWrapped
                    open={this.state.open}
                    onClose={this.handleclose}
                /> */}
        {/* <Modalcomp
          visible={this.state.open}
          closemodal={this.handleClickcloseicon}
          //   title={"VIEW PATIENT DETAILS"}
        ></Modalcomp> */}
      </div>
    );
  }
}
