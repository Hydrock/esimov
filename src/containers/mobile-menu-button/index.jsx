import { connect } from 'react-redux'
import MobileMenuButton from '@src/components/common/mobile-menu-button'

function mapStateToProps(state) {
  return {
    opened: state.menuState.opened
  }
}

export default connect(mapStateToProps)(MobileMenuButton)
