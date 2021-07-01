import React from "react";

function FormComponent(props) {
  return (
    <div className='formDisp'>
        <form>
          <input
            name="topText"
            value={props.topText}
            onChange={props.handleChange}
            placeholder="Top"
          />
          <br />
          <input
            name="bottomText"
            value={props.bottomText}
            onChange={props.handleChange}
            placeholder="Bottom"
          />
          <br />
          <button className='submitBtn'
            // Anonymous (helper) function to pass URL
            onClick={(e) => {
              e.preventDefault();
              props.handleSubmit(props.imgUrl.url);
            }}
          >
            Submit
          </button>
        </form>
      <div className='imgDisp'>
        <div className="imgCont">
          <button className='refreshBtn'
            // Anonymous (helper) function to smoothly pass target
            onClick={(e) => {
              e.preventDefault();
              props.shuffleButton();
            }}
            >
              Refresh
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
    </div>
  );
}

export default FormComponent;
