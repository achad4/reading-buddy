import React, { PropTypes, Component } from 'react';

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

      return (
        <div className="Comment">
          // <h1>{this.props.title}</h1>
          <h2>{this.props.body}</h2>
        </div>
      );
    }
}
