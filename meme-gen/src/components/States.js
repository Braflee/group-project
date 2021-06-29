import React, {Component} from "react";
import FormComponent from "./FormComponent";
import Memes from "./Memes";

class States extends Component {
  state = {
    topText: "",
    bottomText: "",
    imgUrl: "",
    memeArray: [],
    userMemes: []
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => {
        const { memes } = res.data;
        this.setState({ memeArray: memes });
        const randomIndex = Math.floor(Math.random() * this.state.memeArray.length);
        const randMemeImg = this.state.memeArray[randomIndex].url;
        this.setState({ imgUrl: randMemeImg });
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
    console.log('test');
    const randomIndex = Math.floor(Math.random() * this.state.memeArray.length);
    const randMemeImg = this.state.memeArray[randomIndex].url;
    this.setState({ imgUrl: randMemeImg });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState((prevState) => {
        const memeList = {
          topText: this.state.topText,
          bottomText: this.state.bottomText,
          imgUrl: this.state.imgUrl,
        };
        return {
          topText: "",
          bottomText: "",
          userMemes: [...prevState.userMemes, memeList ],
        }
      });
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
    const memeCompile = this.state.userMemes.map(item => <Memes key={item.topText} item={item} url={item.imgUrl}/>)
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
        <div>
          {memeCompile}
        </div>
      </div>
    );
  }
}

export default States;
