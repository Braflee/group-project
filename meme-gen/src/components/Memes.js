import React from "react";

export default function Memes(props) {
  return (
    <div>
      <button onClick={props.handleDelete}>Delete</button>
      <button onClick={props.handleEdit}>Edit</button>
    </div>
  );
}
