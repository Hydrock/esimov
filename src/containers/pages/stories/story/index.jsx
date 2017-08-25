import Story from '@src/components/pages/stories/story'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    stories: state.stories
  }
}

export default connect(mapStateToProps)(Story)