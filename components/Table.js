// import React, { Component} from "react";
// import ReactDataGrid from "react-data-grid";

// const columns = [
//     { key: "country", name: "Country" },
//     { key: "region", name: "Region" },
//     { key: "city", name: "City" },
//     { key: "name", name: "Name" },
//     { key: "status", name: "Status" }
//   ];
  
//   // this needs to be the object of leagues in the future
//   const rows = [
//     { country: 'Unknown', region: "SomePlace", city: "Somewhere", name: "Heck Yea Derby", status: "B" },
//   ];


// class Table extends Component{
//   constructor(props) {
//         super(props);
//         this.state = {
//           rows: []
//         }
//           //add functions here for button clicks
//         };  

//   componentDidMount() {
//         fetch('/')
//           .then(res => res.json())
//           .then((leagues) => {
//             if (!Array.isArray(leagues)) leagues = [];
//             console.log('fetch was a success')
//             return this.setState({rows: response });  // make rows equal empty array            
//           })
//           .catch(err => console.log('Leagues.componentDidMount: get Leagues: ERROR: ', err));
//   }

// // onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
// //     this.setState(state => {
// //       const rows = state.rows.slice();
// //       for (let i = fromRow; i <= toRow; i++) {
// //         rows[i] = { ...rows[i], ...updated };
// //       }
// //       return { rows };
// //     });
// //   };

 
  
//   render(){

//     let table = [];
//     for (let i = 0; i < this.state.urls.length; i++) {
//       table.push( this.state.rows[i] );
//     }

//     return(
//     <ReactDataGrid
//         columns={columns}
//         {table}
//       />

//     );
//   }
// }

// export default Table;

import React from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";

const columns = [
  { key: "id", name: "ID", editable: true },
  { key: "title", name: "Title", editable: true },
  { key: "complete", name: "Complete", editable: true }
];

const rows = [
  { id: 0, title: "Task 1", complete: 20 },
  { id: 1, title: "Task 2", complete: 40 },
  { id: 2, title: "Task 3", complete: 60 }
];

class Example extends React.Component {
  state = { rows };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
  render() {
    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={3}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);