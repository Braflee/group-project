import React from "react";

export default function Memes(props) {
  const { imgUrl, topText, bottomText, id } = props.item; // Deconstructing
  // console.log(props.item);
  return (
    <div>
      <div className="userMeme" style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className="memeTopText">
          <p>{topText}</p>
        </div>
        <div className="memeBottomText">
          <p>{bottomText}</p>
        </div>
      </div>
      <button
        // Anonymous (helper)) function to pass ID
        onClick={(e) => {
          e.preventDefault();
          props.handleDelete(id);
        }}
      >
        Delete
      </button>
      <button onClick={props.handleEdit}>Edit</button>
    </div>
  );
}
