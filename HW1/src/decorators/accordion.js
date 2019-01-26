//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpen: false
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          handleBtnClick={this.handleBtnClick}
        />
      )
    }

    handleBtnClick = () => this.setState({ isOpen: !this.state.isOpen })
  }
