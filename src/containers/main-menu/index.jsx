import { connect } from 'react-redux'
import MainMenu from '@src/components/main-menu'

function mapStateToProps(state) {
  return {
    opened: state.menuState.opened
  }
}

export default connect(mapStateToProps)(MainMenu)