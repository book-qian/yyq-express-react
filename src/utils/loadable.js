import React, { Component } from 'react'
import Loadable from 'react-loadable'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

class LoadingComponent extends Component {
  constructor(props) {
    super(props)
    NProgress.start()
  }
  componentDidMount() {
    NProgress.done()
  }
  render() {
    return <div />
  }
}

const LoadProess = (loader, loading = LoadingComponent) => {
  return Loadable({
    loader,
    loading
  })
}

export default LoadProess
