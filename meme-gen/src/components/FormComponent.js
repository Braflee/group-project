import React from "react";

function FormComponent(props) {
  return (
    <div>
      <form>
        {/* <form onSubmit={this.handleSubmit}> */}
        <input
          name="topText"
          value={props.topText}
          onChange={props.handleChange}
          placeholder="Enter text"
        />
        <input
          name="bottomText"
          value={props.bottomText}
          onChange={props.handleChange}
          placeholder="Enter more text"
        />
        <br />
        <button onClick={props.shuffleButton}>Shuffle</button>
        {/* <button>Submit</button>
        <br />
        <br />
        <button onClick={props.handleEdit}>Edit</button>
        <br />
      <button onClick={props.handleDelete}>Delete</button> */}
      </form>
      <div>{/* <ol>{memeArray}</ol> */}</div>
    </div>
  );
}

export default FormComponent;

// * functions for buttons
// handleSubmit = (e) => {
//   e.preventDefault();
//   this.setState((prevState) => ({
//     memesArr: [...prevState.memesArr, this.state],
//   }));
// };

// handleEdit = (e) => {
//   e.preventDefault();
//   this.setState((prevState) => ({}));
// };

// handleDelete = (e) => {
//   e.preventDefault();
//   this.setState((prevState) => ({}));
// };
