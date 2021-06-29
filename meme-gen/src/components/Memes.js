import React from "react";

export default function Memes(props) {
  console.log(props.item);
  return (
    <div>
      <div className='userMeme' style={{backgroundImage: `url(${props.url})`}}>
        <div className='memeTopText'>
          <p>{props.item.topText}</p>
        </div>
        <div className='memeBottomText'>
          <p>{props.item.bottomText}</p>
        </div>
      </div>
      <button onClick={props.handleDelete}>Delete</button>
      <button onClick={props.handleEdit}>Edit</button>
    </div>
  );
}
