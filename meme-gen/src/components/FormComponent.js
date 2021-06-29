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
          maxLength='20'
        />
        <br />
        <input
          name="bottomText"
          value={props.bottomText}
          onChange={props.handleChange}
          placeholder="Enter more text"
          maxLength='20'
        />
        <br />
        <button onClick={props.shuffleButton}>Refresh Meme Image</button>
        <button onClick={props.handleSubmit}>
          Submit
        </button>
      </form>
      <div className="imgCont">
        <div
          className="imgUrl"
          style={{ backgroundImage: `url(${props.imgUrl})` }}
        >
          <h1>{props.topText}</h1>
          <h1>{props.bottomText}</h1>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
