import React from "react";

function FormComponent(props) {
  return (
    <div>
      <form>
        <input
          name="topText"
          value={props.topText}
          onChange={props.handleChange}
          placeholder="Enter text"
        />
        <br/>
        <input
          name="bottomText"
          value={props.bottomText}
          onChange={props.handleChange}
          placeholder="Enter more text"
        />
        <br />
        <button onClick={props.shuffleButton}>Shuffle</button>
      </form>
      <div className='imgCont'>
        <div
          className='randomImg'
          style={{ backgroundImage: `url(${props.randomImg})` }}>
          <h1>{}</h1>
          <h1>{}</h1>
        </div>
      </div>
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
/* <button>Submit</button>
        <br />
        <br />
        <button onClick={props.handleEdit}>Edit</button>
        <br />
      <button onClick={props.handleDelete}>Delete</button> */