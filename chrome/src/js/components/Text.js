import React, { PropTypes, Component } from 'react';
import * as actions from '../actions';

export default class Text extends Component {

  // constructor(props) {
  //     super(props); //use props instead of state when you have the smart container
  //     this.state = {
  //       title: "Title",
  //       body: 'blah blah blah'
  //     };
  //   }

    // update(doc) {
    //   this.setstate({
    //     title: doc.textBlock,
    //     body: doc.textBlock
    //   });
    // }
    //
    // paginate(textBlock) {
    //   this.setstate({
    //     body: textBlock
    //   });
    // }


    render() {
      const { onClick, body } = this.props;
      return (
        <div className="Comment">
          <h2>{body}</h2>
            <button onClick={ onClick } >next</button>
        </div>
      );
    }
}
