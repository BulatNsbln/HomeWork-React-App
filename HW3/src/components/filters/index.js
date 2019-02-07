import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './date-range'
import SelectFilter from './select'
import { connect } from 'react-redux'

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  render() {
    const {articles} = this.props;
    return (
      <div>
        <SelectFilter articles={articles} />
        <DateRange />
      </div>
    )
  }
}

const mapStateToProps = (storeState) => ({articles: storeState.articles})

export default connect(mapStateToProps)(Filters)
