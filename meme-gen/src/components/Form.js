import React, {Component} from 'react'

class Form extends Component {
    state = {
        memeArray: []
    }
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    memeArray: data.memes
                    // I checked the API in postman, 'memes' would be the best way to call the object
                })
            })
    }

    render(){
        
        return(
            <div>
                {this.state.memeArray}
            </div>
        )
    }
}

export default Form