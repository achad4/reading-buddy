import { connect } from 'react-redux';
import Text from './Text';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    body: state.body
  }
}

// const mapDispatchToProps = dispatch => ({
//   dispatch
// });
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(actions.fetchBody())
    }
  }
}


const TextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Text);

export default TextContainer;
