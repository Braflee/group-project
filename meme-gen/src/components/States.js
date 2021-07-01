import React, { Component } from "react";
import Memes from "./Memes";
import { v4 as uuid } from "uuid"; 

class States extends Component {
  state = {
    topText: "",
    bottomText: "",
    isEdit: false,
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
      isEdit: this.state.isEdit,
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

  toggleEdit = () => {
    this.setState(prevState => {
      return {
          userMemes: {
            isEdit: !prevState.isEdit
          }
        }
    })
  }

  render() {
    const memeCompile = this.state.userMemes.map(meme => 
    <Memes key={meme.id} meme={meme} isEdit={meme.isEdit} handleDelete={this.handleDelete} toggleEdit={this.toggleEdit} />)
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
