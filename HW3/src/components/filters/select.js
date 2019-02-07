import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectArticle } from '../../ac/index'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  handleChange = (selected) => this.props.selectArticle(selected)

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    const { selected } = this.props

    return (
      <Select
        options={this.options}
        value={selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

const mapStateToProps = (storeState) => ({ selected: storeState.selected })

export default connect(
  mapStateToProps,
  { selectArticle }
)(SelectFilter)
