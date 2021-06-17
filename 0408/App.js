function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={
      date:new Date(),
    };
  }

  componentDidMount(){
    this.timerID = setIntervala(
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
        <h1>Clock component will mount update.</h1>
        <h2>
          It is {this.state.date.toLocaleTimeString()}.
        </h2>
      </div>
    )
  }
}


export default Clock;
