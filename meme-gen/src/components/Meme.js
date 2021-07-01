import React from "react";

class Meme extends React.Component {
    state = {
      isEdit: false,
      topText: "",
      bottomText: "",
      imgUrl: ""
    }

    toggleEdit = () => {
    this.setState(prevState => {
      return { 
            isEdit: !prevState.isEdit
          
        }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };


  // handleEdit(e) {
  //   e.preventDefault()
  //   const edits =

  // }

    render(){
      const { imgUrl, topText, bottomText, id, handleEdit } = this.props.meme; // Deconstructing
      return (
        <div>
          {this.state.isEdit? 
            <div>
              <form onSubmit={(e) => {e.preventDefault(); handleEdit( id, {topText: this.state.topText, bottomText: this.state.bottomText, imgUrl})}}>
            <input
              name="topText"
              value={this.state.topText}
              onChange={this.handleChange}
              placeholder="Top"
            />
            <br />
            <input
              name="bottomText"
              value={this.state.bottomText}
              onChange={this.handleChange}
              placeholder="Bottom"
            />
            <br />
            <button className='submitBtn' onClick={this.handleSubmit}>Submit</button>
            </form>
            <button onClick={() => this.toggleEdit()}>Cancel</button>
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
              <button className='deleteBtn' onClick={(e) => {e.preventDefault();this.props.handleDelete(id);}}>Delete</button>
              <button className='editBtn' onClick={() => this.toggleEdit()}>Edit</button>
            </div>
          }
        </div>
      );
    }
}
export default Meme