import { connect } from 'react-redux'
import MainMenu from '@src/components/main-menu'

function mapStateToProps(state) {
  return {
    menuOpened: state.menuOpened
  }
}

export default connect(mapStateToProps)(MainMenu)