import React from "react";
import './Calendar.css'
import {dateFns} from 'date-fns';
import { IconButton, withStyles } from "@material-ui/core";

class Calendar extends React.Component {
  constructor(props)
  {
    super(props)
   this.state = {
    currentMonth: new Date(),
    selectedDate:new Date(),
    startDate:dateFns.format(new Date(),"YYYY"),
    endDate:dateFns.format(new Date(),"MMM"),                
   }
   
  }
  renderHeader() {
    const current_date=(dateFns.format(new Date(),"ddd, D MMM YYYY"))
    const dateFormat = "MMM YYYY";
    const {startDate,e} = this.state
    return (
      <div className="header">
          <div className="current_date_container"><span className="date_click">
            {dateFns.format(this.state.selectedDate,"ddd, D MMM YYYY")}
            {/* {current_date} */}
          </span></div>
          <div>
          <div className="icon" onClick={this.prevMonth}>chevron_left</div>
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
          <div className="icon"  onClick={this.nextMonth}>chevron_right</div>
          </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "ddd";
    const days = [];
    let startDate = dateFns.startOfWeek(this.state.currentMonth);
   
    for (let i = 0; i <7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    console.log("hdgfgfgfgfd",start)
    const { currentMonth, selectedDate} = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const start=dateFns.format(this.state.startDate,"mmm")
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const e = dateFns.endOfWeek(monthEnd);
    const date=dateFns.format(this.state.startDate,"yyyy")
    const dateFormat = "D";
    const format="yyyy"
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= e) {
      for (let i = 1; i <8; i++) {
        formattedDate = dateFns.format(day, dateFormat);
      
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
            
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <span className="slots">12</span>
            <span className="available_slots">3</span>
            <p className="fhghfh"></p>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">
      <div>
      <div className="body_cells">{rows}
     
      </div>
      <div className="book_slots_container">
          <div className="book_slots"><p className="total_slots"></p><span onClick={this.getDates}>Total Slots</span></div>
          <div className="book_slots"><p className="avail_slots"></p><span>Available Slots</span></div>  
      </div>
      </div>
      </div>;
  }

  onDateClick = (day)=> {
    console.log(this.state.selectedDate)
    const start=this.state.startDate
    const end=this.state.endDate;
    // var day=D
    // if(D<10){
    //   day="0"+D
    // }
    // const range = dateFns.addDayToRange(day, this.state);
    alert(this.state.startDate)
    // this.setState({selectedDate:{ start,end}});
    this.setState({
      selectedDate: day
    });
   
  };
  renderWrappedWeekDay = (date, selectedDate, dayInCurrentMonth) => {
    console.log(dayIsBetween)
    const { classes } = this.props;
    let dateClone = dateFns.makeJSDateObject(date);
    let selectedDateClone = dateFns.makeJSDateObject(selectedDate);

    const start = dateFns.startOfWeek(selectedDateClone);
    const end = dateFns.endOfWeek(selectedDateClone);

    const dayIsBetween = dateFns.isWithinInterval(dateClone, { start, end });
    const isFirstDay =dateFns.isSameDay(dateClone, start);
    const isLastDay =dateFns.isSameDay(dateClone, end);

    const wrapperClassName = dateFns.clsx({
      [classes.highlight]: dayIsBetween,
      [classes.firstHighlight]: isFirstDay,
      [classes.endHighlight]: isLastDay,
    });

    const dayClassName = dateFns.clsx(classes.day, {
      [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween,
    });
    return (
      <div className={wrapperClassName}>
        <IconButton className={dayClassName}>
          <span> {dateFns.format(dateClone, "d")} </span>
        </IconButton>
      </div>
    );
  };
  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };
//  getDates(startDate, stopDate) {
//   alert(currentDate)
//     var dateArray = [];
//     var currentDate = dateFns(startDate);
//     var stopDate = dateFns(stopDate);
//     while (currentDate <= stopDate) {
//       dateArray.push(dateFns(currentDate).format("YYYY"));
//       currentDate = dateFns(currentDate).add(1, "year");
//     }
//     return dateArray;
//     console.log(dateArray)
//   }
  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
     
      </div>
    );
  }
}

export default Calendar;
