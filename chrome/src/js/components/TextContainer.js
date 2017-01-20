import { connect } from 'react-redux';
import Text from './Text';

const mapStateToProps = state => {
  return {
    body: state.body
  }
}

const mapDispatchToProps = dispatch => ({ dispatch });

const TextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Text);

export default TextContainer;
