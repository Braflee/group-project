import React from "react";

export default function Memes(props) {
  console.log(props.item);
  return (
    <div>
      <div className='userMeme' style={{backgroundImage: `url(${props.url})`}}>
        <p>{props.item.topText}</p>
        <p>{props.item.bottomText}</p>
      </div>
      <button onClick={props.handleDelete}>Delete</button>
      <button onClick={props.handleEdit}>Edit</button>
    </div>
  );
}
