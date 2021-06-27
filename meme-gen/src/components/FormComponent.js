import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form onSubmit={this.handleSubmit}>
        <input
          name="topText"
          value={props.data.topText}
          onChange={props.handleChange}
          placeholder="Enter text"
        />
        <div>
          <img src={props.memeImg.image} />
        </div>

        <input
          name="bottomText"
          value={props.data.bottomText}
          onChange={props.handleChange}
          placeholder="Enter more text"
        />
        <br />
        <button>Submit</button>
        <br />
        <button onClick={props.shuffleButton}>Shuffle</button>
        <br />
        <button>Edit</button>
        <br />
        <button>Delete</button>
      </form>
      <div>
        <ol>{memeArray}</ol>
      </div>
    </main>
  );
}

export default FormComponent;

// * handleSubmit function for submit button
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
// * Call for FormComponent on Form.js
{
  /* <FormComponent key={index.id} data={this.state.data} memeImg={this.state.memeImg} */
}
