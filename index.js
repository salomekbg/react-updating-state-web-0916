const React = require('react');

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      hasBeenClicked: true
    });
  }

  render() {
    return (
      hi
      // <div>
      //   <p>I have {this.state.hasBeenClicked ? 'not' : null} been clicked yet!</p>
      //   <button onClick={this.handleClick}>Click me!</button>
      // </div>
    );
  }
}

module.exports = ClickityClick;
