import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Header from '../../../components/Header'

function Personal() {
  return (
    <Fragment>
      <Header title='个人中心' />
    </Fragment>
  )
}

export default connect(
  state => ({}),
  {}
)(Personal)
