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
        <button
          // Anonymous (helper) function to pass URL
          onClick={(e) => {
            e.preventDefault();
            props.handleSubmit(props.imgUrl.url);
          }}
        >
          Submit
        </button>
      </form>
      <div className="imgCont">
        <button
          // Anonymous (helper) function to smoothly pass target
          onClick={(e) => {
            e.preventDefault();
            props.shuffleButton();
          }}
        >
          Refresh Meme Image
        </button>
        <div
          className="imgUrl"
          style={{ backgroundImage: `url(${props.imgUrl.url})` }}
        >
          <div className="formTopText">
            <h1>{props.topText}</h1>
          </div>
          <div className="formBottomText">
            <h1>{props.bottomText}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
