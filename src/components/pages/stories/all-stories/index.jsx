import React, { Component } from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
  loader: () => import('./all-stories'),
  loading: () => null
})

export default class LoadableAllStories extends Component {
  render() {
    return <LoadableComponent/>
  }
}
