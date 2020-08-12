import React, { Component} from "react";
import Table from './Table';


class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Are you working? I'm the react Component</h1>
        <Table />        
      </div>      
    );
  }
}

export default App;