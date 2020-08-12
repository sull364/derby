import React from "react";
import ReactDataGrid from 'react-data-grid';


const columns = [
    { key: "country", name: "Country" },
    { key: "region", name: "Region" },
    { key: "city", name: "City" },
    { key: "name", name: "Name" },
    { key: "status", name: "Status" }
  ];

  // this needs to be the object of leagues in the future
  const rows = [
    { country: 'Unknown', region: "SomePlace", city: "Somewhere", name: "Heck Yea Derby", status: "B" },
  ];

 

class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rows: rows
      };
      //add functions here for button clicks
    }
  
    componentDidMount() {
    //     // try {
    //     //     let response = await fetch('/');
    //     //     console.log('fetch was a success')
    //     //     return this.setState({response});
    //     //   } catch(err) {
    //     //     console.log('Leagues.componentDidMount: get Leagues: ERROR: ', err); 
    //     //   }

        fetch('/api') //"http://localhost:3000/api"
          .then(res => console.log(res.body))
          .then((rows) => {            
            // console.log(rows, "the value of rows")
            // if (!Array.isArray(rows)) rows = [];
            // console.log('fetch was a success')
            // return this.setState({rows});  // make rows equal empty array            
          })
          .catch(err => console.log('Leagues.componentDidMount: get Leagues: ERROR: ', err));

    //    await fetch('/')     
    //         .then(stream => new Response(stream))
    //         .then(response => response.blob())
    //         .then((rows) => {            
    //                 console.log(rows, "the value of rows")
    //                 if (!Array.isArray(rows)) rows = [];
    //                 console.log('fetch was a success')
    //                 return this.setState({rows});  // make rows equal empty array            
    //               })
    //         .catch(err => console.log('Leagues.componentDidMount: get Leagues: ERROR: ', err));
  }

    render() {
        // console.log(this.state.rows)
      return (          
        <ReactDataGrid
          columns={columns}
          rowGetter={(i) => this.state.rows[i]}
          rowsCount={ this.state.rows.length }
        />       
      );
    }
  }
  
  export default Table;
  