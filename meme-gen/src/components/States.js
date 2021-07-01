import React, { Component } from "react";
import Meme from "./Meme";
import { v4 as uuid } from "uuid"; 

class States extends Component {
  state = {
    topText: "",
    bottomText: "",
    memeArray: [], 
    imgUrl: {}, 
    userMemes: [], 
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => {
        const { memes } = res.data;
        this.setState({ memeArray: memes });
        this.shuffleButton(); // DRY - using existing function to get a random image every initial load
      });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleEdit = (e, id, edits) => {
    e.preventDefault()
    let selectedMeme = this.state.userMemes.find(meme => meme.id === id)
    selectedMeme.topText = edits.topText
    selectedMeme.bottomText = edits.bottomText
    selectedMeme.imgUrl = edits.imgUrl

    let newMemes = this.state.selectedMeme.map(meme => meme.id === id? selectedMeme: meme)
    return this.setState({userMemes: newMemes})

  }

  shuffleButton = () => {
    const randomIndex = Math.floor(Math.random() * this.state.memeArray.length);
    const randMemeImg = this.state.memeArray[randomIndex];
    this.setState({ imgUrl: randMemeImg });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const memeList = {
      topText: this.state.topText,
      bottomText: this.state.bottomText,
      imgUrl: this.state.imgUrl.url,
      id: uuid(), 
    };
    this.setState((prevState) => {
      return {
        topText: "",
        bottomText: "",
        userMemes: [...prevState.userMemes, memeList],
      };
    });
  };

  handleDelete = (id) => {
    const filterArr = this.state.userMemes.filter((meme) => meme.id !== id);
    this.setState({ userMemes: filterArr });
  };

  render() {
    const memeCompile = this.state.userMemes.map(meme => 
    <Meme key={meme.id} meme={meme} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />)
    console.log({memeCompile});
    return (
      <div className='genCont'>
        <div className='formDisp'>
          <form>
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
          <div className='imgDisp'>
            <div className="imgCont">
              <button className='refreshBtn'onClick={(e) => {e.preventDefault();this.shuffleButton();}}>Refresh</button>
              <div className="imgUrl"style={{ backgroundImage: `url(${this.state.imgUrl.url})` }}>
                <div className="formTopText">
                  <h1>{this.state.topText}</h1>
                </div>
                <div className="formBottomText">
                  <h1>{this.state.bottomText}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='memeList'>{memeCompile}</div>
      </div>
    );
  }
}

export default States;
