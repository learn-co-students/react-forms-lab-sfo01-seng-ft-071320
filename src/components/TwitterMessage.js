import React from "react";

// this component has a prop of maxChar , console.log(this.props) to confirm your props
class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  inputChange = (e) =>{

    this.setState({
      value: e.target.value,
      remainingChars: this.props.maxChars - e.target.value.length
    })
  }
  // we need a way to reduce the state of the maxChars as we type in our input 


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        name="message"
        id="message"
        value={this.state.value}  
        onChange={this.inputChange}
        />
        <p>Remaining Characters left: - {this.state.remainingChars} of {this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
