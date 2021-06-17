import React from 'react';


const comment = {
  text: 'HI',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

class Comment extends React.Component {
  constructor(props){
      super(props);
      this.props=Comment;
  }


  render() {
      return (
          <div className="Comment">
          <div className="UserInfo">
              <img
              className="Avatar"
              src={this.props.author.avatarUrl}
              alt={this.props.author.name}
              />
              <div className="UserInfo-name">
              {this.props.author.name}
              </div>
          </div>
          <div className="Comment-text">{this.props.text}</div>
          </div>
      );
  }
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={
      date:new Date(),
    };
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({date:new Date()})
  }

  render(){
    return (
      <div>
        <Comment
          text={comment.text}
          author={comment.author}
        />
        <h1>Clock component will mount update.</h1>
        <h2>
          It is {this.state.date.toLocaleTimeString()}.
        </h2>
      </div>
    )
  }
}


export default Clock;