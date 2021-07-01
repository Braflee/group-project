import React from "react";

 function Memes(props) {
  const { imgUrl, topText, bottomText, id } = props.meme; // Deconstructing
  return (
    <div>
      {props.meme.isEdit? 
        <div>
          <button onClick={props.toggleEdit}>Cancel</button>
        </div>
        :
        <div className='memeCont'>
          <div className="userMeme" style={{ backgroundImage: `url(${imgUrl})` }}>
            <div className="memeTopText">
              <p>{topText}</p>
            </div>
            <div className="memeBottomText">
              <p>{bottomText}</p>
            </div>
          </div>
          <button className='deleteBtn' onClick={(e) => {e.preventDefault();props.handleDelete(id);}}>Delete</button>
          <button className='editBtn' onClick={props.toggleEdit}>Edit</button>
        </div>
      }
    </div>
  );
}
 export default Memes