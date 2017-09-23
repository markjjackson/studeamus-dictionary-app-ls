import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Actions
import updateDictionary from 'Actions/updateDictionary'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
        updateDictionary
      },
      dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
