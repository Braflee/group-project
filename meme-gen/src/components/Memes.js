import React from "react";

export default function Memes(props) {
  const { imgUrl, topText, bottomText, id } = props.item; // Deconstructing
  // console.log(props.item);
  return (
    <div className='memeCont'>
        <div className="userMeme" style={{ backgroundImage: `url(${imgUrl})` }}>
          <div className="memeTopText">
            <p>{topText}</p>
          </div>
          <div className="memeBottomText">
            <p>{bottomText}</p>
          </div>
        </div>
        <div>
          <button className='deleteBtn'
            // Anonymous (helper)) function to pass ID
            onClick={(e) => {
              e.preventDefault();
              props.handleDelete(id);
            }}
          >
            Delete
          </button>
        </div>
        <div>
          <button className='editBtn' onClick={props.handleEdit}>
            Edit
          </button>
        </div>
    </div>
  );
}
