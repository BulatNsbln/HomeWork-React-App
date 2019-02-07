import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { fromDate, toDate } from '../../ac/index'

import 'react-day-picker/lib/style.css'
import { runInThisContext } from 'vm';

class DateRange extends Component {
  /* state = {
    from: null,
    to: null
  } */
  

  handleDayClick = (day) => (!this.props.from ? this.props.fromDate(day) : this.props.toDate(day) ) 

  render() {
    const { from, to } = this.props;
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

const mapStateToProps = ({from, to}) => ({ from, to })

 const mapDispatchToProps = {
  fromDate: fromDate,
  toDate: toDate
}


export default connect(mapStateToProps, mapDispatchToProps)(DateRange)
