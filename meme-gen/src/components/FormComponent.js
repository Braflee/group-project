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
        <br />
        <input
          name="bottomText"
          value={props.bottomText}
          onChange={props.handleChange}
          placeholder="Enter more text"
        />
        <br />
        <button onClick={props.shuffleButton}>Refresh Meme Image</button>
        <button type="submit" onSubmit={props.handleSubmit}>
          Submit
        </button>
      </form>
      <div className="imgCont">
        <div
          className="randomImg"
          style={{ backgroundImage: `url(${props.randomImg})` }}
        >
          <h1>{props.topText}</h1>
          <h1>{props.bottomText}</h1>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
