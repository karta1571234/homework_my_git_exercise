import React from 'react';

function Greeting(props){
  const isLoggedIn=props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }
  else {
    return <GuestGreeting />;
  }
}

function UserGreeting(props){
  return <h1>Welcome</h1>
}
function GuestGreeting(props){
  return <h1>Please login</h1>
}

function LoginButton(props){
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  )
}
function LogoutButton(props){
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn:false,
    }
    //this.handleLoginClick=this.handleLoginClick.bind(this);
    //this.hangleLogoutClick=this.handleLoginClick.bind(this);
  }

  handleLoginClick=()=>{
    this.setState({isLoggedIn:true});
  }
  hangleLogoutClick=()=>{
    this.setState({isLoggedIn:false});
  }

  render(){
    const isLoggedIn=this.state.isLoggedIn;
    let button;
    if(isLoggedIn){
      button=<LogoutButton onClick={this.hangleLogoutClick} />
    }
    else{
      button=<LoginButton onClick={this.handleLoginClick} />
    }

    return(
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}
export default LoginControl;