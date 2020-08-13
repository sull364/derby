import React, { Component} from "react";
import Table from './Table';


class App extends Component{
  render(){
    return(
      <div className="App">
        <div id= 'title'>
          <center>            
              <h1>Welcome to DerbyListing</h1>
              <h2>Home to the List of Roller Derby Leagues</h2>
          </center>
        </div>        
        <Table />        
      </div>      
    );
  }
}

export default App;