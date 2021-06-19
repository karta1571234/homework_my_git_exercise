import React from 'react';

class Event extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:'初始資料，來自父元件 this.state'
    }
  };

  updateFCstate=()=>{
    this.setState({data:'子元件使用父元件 event 改變父元件 state'})
  };

  render(){
    return(
      <div>
        <Content updateStat={this.updateFCstate}
        stateData={this.state.data} />
      </div>
    );
  }
}

class Content extends React.Component{
  render(){
    return(
      <div>
        <button onClick={this.props.updateStat}>
          我是Content子元件的按鈕
        </button>
        <h3>state狀態:{this.props.stateData}</h3>
      </div>
    );
  }
}

export default Event;