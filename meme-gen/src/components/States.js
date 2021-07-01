import React, { Component } from "react";
import FormComponent from "./FormComponent";
import Memes from "./Memes";
import { v4 as uuid } from "uuid"; // <npm install uuid> to your project to access IDs

class States extends Component {
  state = {
    topText: "",
    bottomText: "",
    memeArray: [], // Stores initial load from API
    imgUrl: {}, // Stores selected meme
    userMemes: [], // Stores memes to list
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
    console.log(this.state.imgUrl);
    const randomIndex = Math.floor(Math.random() * this.state.memeArray.length);
    const randMemeImg = this.state.memeArray[randomIndex];
    this.setState({ imgUrl: randMemeImg });
  };

  handleSubmit = (url) => {
    // Passing url from onClick event and target
    const memeList = {
      // Declaring variable outside of setState as setState is only for handling state
      topText: this.state.topText,
      bottomText: this.state.bottomText,
      imgUrl: url,
      id: uuid(), // Generating a unique ID for managing memes.
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

  // handleEdit = (e) => {
  //   e.preventDefault();
  //   this.setState((prevState) => [
  //     // Do something here
  //   ]);
  // };

  render() {
    const memeCompile = this.state.userMemes.map((item) => (
      <Memes key={item.id} item={item} handleDelete={this.handleDelete} />
    ));
    return (
      <div>
        <div>
          <FormComponent
            handleChange={this.handleChange}
            shuffleButton={this.shuffleButton}
            handleSubmit={this.handleSubmit}
            {...this.state}
          />
        </div>
        <div className='memeList'>{memeCompile}</div>
      </div>
    );
  }
}

export default States;
