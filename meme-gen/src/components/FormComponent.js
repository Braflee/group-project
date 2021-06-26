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
          <img src={props.meme.image} />
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
        <button>Refresh</button>
        <br />
        <button>Edit</button>
        <br />
        <button>Delete</button>
      </form>
    </main>
  );
}

export default FormComponent;

// * Alternate form
{
  /* <main>
  <form onSubmit={this.handleSubmit}>
    <input
      name="topText"
      value={props.data.topText}
      onChange={props.handleChange}
      placeholder="Enter text"
    />
    <br />
    <button>Submit</button>
    <br />
    <button>Refresh</button>
    <br />
    <button>Edit</button>
    <br />
    <button>Delete</button>
  </form>
  <hr />
  <h2>Your Memes</h2>
  <ol>{memesArr}</ol>
</main> */
}

// * handleSubmit function for submit button
// handleSubmit = (e) => {
//   e.preventDefault();
//   this.setState((prevState) => ({
//     memesArr: [...prevState.memesArr, this.state],
//   }));
// };
