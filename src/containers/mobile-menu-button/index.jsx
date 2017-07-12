import { connect } from 'react-redux'
import MobileMenuButton from '@src/components/common/mobile-menu-button'

function mapStateToProps(state) {
  return {
    menuOpened: state.menuOpened
  }
}

export default connect(mapStateToProps)(MobileMenuButton)
