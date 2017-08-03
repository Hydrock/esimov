import React, { Component } from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
  loader: () => import('@src/components/pages/stories/all-stories/all-stories.jsx'),
  loading: () => null
})

export default class LoadableAllStories extends Component {
  render() {
    return <LoadableComponent/>
  }
}
