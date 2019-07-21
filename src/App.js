import React,{Component} from 'react';
import './App.css';
import Userinput from './UserInput/userinput'
import Useroutput from './UserInput/useroutput'




class App extends Component {


  state = {
    username: "superman"
  }

  userInputEventHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Userinput change={this.userInputEventHandler} currentusername={this.setState.username}/>
        <Useroutput username={this.state.username}  />
        <Useroutput username= {this.state.username} />
        <Useroutput username="OBISCO" />
      </div>
    );
  }
}
export default App;
