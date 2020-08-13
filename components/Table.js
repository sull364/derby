import React from "react";
import ReactDataGrid from 'react-data-grid';
import AddLeague from './addLeague';

const defaultColumnProperties = {
    filterable: true,    
  };

const columns = [
    { key: "country", name: "Country" },
    { key: "region", name: "Region" },
    { key: "city", name: "City" },
    { key: "name", name: "Name" },
    { key: "fb", name: "Facebook" },
    { key: "status", name: "Status" }
  ]
class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hasData: false,
        rows: [],        
      };
      //add functions here for button clicks
    }
  
    componentDidMount(props) {

    console.log('COMPONENT DID MOUNT');
        fetch('/api') 
          .then(res => res.json())          
          .then((rows) => {            
            // console.log(rows, "the value of rows")
            // console.log('fetch was a success')
            return this.setState({rows: rows, hasData: true});  // make rows equal empty array            
          })
          .catch(err => console.log('Table.componentDidMount: get Leagues: ERROR: ', err))
  }

    

    render() {        
        
      if (!this.state.hasData) return(
        <div>
        <h1>Loading data, please wait...</h1>
      </div>
      )
      if (!this.state.rows.length) return (
        <div>Sorry, no leagues found</div>
      );
      return (  
        <div id = 'table'>  
        <h2>{this.state.rows.length} teams and counting!</h2>      
            <ReactDataGrid
            columns={columns}
            rowGetter={(i) => this.state.rows[i]}
            rowsCount={ this.state.rows.length }
            />
          <AddLeague />
        </div>        
      );    
   }
  }
  
  export default Table;
  