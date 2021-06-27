import React from "react";
import FormComponent from "./FormComponent";

class States extends React.Component {
  constructor() {
    super();
    this.state = {
      topTex: "",
      bottomTex: "",
      randomImg: "",
      memeArray: [],
    };

    this.shuffleButton = this.shuffleButton.bind(this);
  }

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

  render() {
    return (
      <div>
        <FormComponent handleChange={this.handleChange} {...this.state} />
      </div>
    );
  }
}

export default States;
import React from "react";
import FormComponent from "./FormComponent";

class States extends React.Component {
  constructor() {
    super();
    this.state = {
      topTex: "",
      bottomTex: "",
      randomImg: "",
      memeArray: [],
    };

    this.shuffleButton = this.shuffleButton.bind(this);
  }

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

  render() {
    return (
      <div>
        <FormComponent handleChange={this.handleChange} {...this.state} />
      </div>
    );
  }
}

export default States;
