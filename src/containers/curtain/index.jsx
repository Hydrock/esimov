import Curtain from '@src/components/curtain'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

function mapStateToProps(state) {
  return {
    loadState: state.load.loadState,
    path: state.path.path
  }
}

export default withRouter(connect(mapStateToProps)(Curtain))