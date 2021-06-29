import React from "react";
import FormComponent from "./FormComponent";
import Memes from "./Memes";

class States extends React.Component {
  state = {
    topText: "",
    bottomText: "",
    randomImg: "",
    memeArray: [],
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => {
        const { memes } = res.data;
        console.log(memes);
        this.setState({ memeArray: memes });
      });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  shuffleButton = (e) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * this.state.memeArray.length);
    const randMemeImg = this.state.memeArray[randomIndex].url;
    this.setState({ randomImg: randMemeImg });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meme submitted!");

    const memeList = {
      topText: this.state.topText,
      bottomText: this.state.bottomText,
      randMemeImg: this.state.url,
    };

    this.setState((prevState) => ({
      memeArray: [...prevState, memeList],
      topText: "",
      bottomText: "",
      randMemeImg: "",
    }));
  };

  handleDelete = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      memeArray: [...prevState, this.state],
    }));
  };

  handleEdit = (e) => {
    e.preventDefault();
    this.setState((prevState) => [
      // Do something here
    ]);
  };

  render() {
    return (
      <div>
        <div>
          <FormComponent
            handleChange={this.handleChange}
            shuffleButton={this.shuffleButton}
            {...this.state}
          />
        </div>
        <div>
          <Memes
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}

export default States;
