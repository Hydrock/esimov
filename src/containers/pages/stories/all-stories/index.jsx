import AllStories from '@src/components/pages/stories/all-stories'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    stories: state.stories
  }
}

export default connect(mapStateToProps)(AllStories)