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
        <button onClick={props.handleSubmit}>
          Submit
        </button>
      </form>
      <div className="imgCont">
        <button onClick={props.shuffleButton}>Refresh Meme Image</button>
        <div
          className="imgUrl"
          style={{ backgroundImage: `url(${props.imgUrl})` }}
        >
          <div className='formTopText'>
            <h1>{props.topText}</h1>
          </div>
          <div className='formBottomText'>
            <h1>{props.bottomText}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
