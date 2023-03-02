import { useState } from "react";


function SearchBar(props){

    // setting up the state 
    const [input, setInput] = useState("");
    const [field, setField] = useState("");

    const handleOnSubmit = e => {
        e.preventDefault();
        //show filtered results, call to function in App.js 
        props.filterMovies(input, field);
    } 

    return (
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="search">Search :</label>
            <input 
                type="text" 
                id="search" 
                name="search"
                value={input}
                onChange={e => setInput(e.target.value)}
                /><br/>
            <label htmlFor="title">Title</label>
            <input 
                type="radio" 
                id="title" 
                name="title"
                value="title"
                onChange={e => setField(e.target.value)}
                checked={field === "title"}
                />
            <label htmlFor="actors">Actors</label>
            <input 
                type="radio" 
                id="actors" 
                name="actors"
                value="actors"
                onChange={e => setField(e.target.value)}
                checked={field === "actors"}
                />
            <label htmlFor="plot">Plot</label>
            <input 
                type="radio" 
                id="plot" 
                name="plot"
                value="plot"
                onChange={e => setField(e.target.value)}
                checked={field === "plot"}
                />
            <br/>
            <button type="submit">
                Search
            </button>
        </form>
    );
}

export default SearchBar;






// import React, { Component } from 'react'

// const TableHeader = () => {
//     return (
//       <thead>
//         <tr>
//           <th>title</th>
//             <th>actors</th>
//             <th>plot</th>
//             <th>imdbRating</th>
//             <th>director</th>
//             <th>year</th>
//             <th>createdAt</th>
//         </tr>
//       </thead>
//     );
//   }


// //table body simple component
// const TableBody = (props) => {

    
//     //iterate character data and create a row for each entry
//     //use .map to iterate over each row and wrap it in an html table row


  

//   const rows = props.data.map((row, index) => {

//     return (      
//      <tr key ={index}>
//       <td>{row.title}</td>
//       <td>{row.actors}</td>
//       <td>{row.plot}</td>
//       <td>{row.imdbRating}</td>
//       <td>{row.director}</td>
//       <td>{row.year}</td>
//       <td>{row.createAt}</td>

//     <td><button onClick={() => props.removeMovie(index)}>Delete</button></td>
//     </tr>
//        )      

//     })
    
//     return <tbody>{rows}</tbody>

// }

//   class Table extends Component {
//     render() {
  
//       //props passed in from App
//   const {movieData, removeMovie} = this.props;
  
//       return (
//         <table>
//      <TableHeader/>
//      <TableBody data = {movieData} removeMovie = {removeMovie}
//      />
//         </table>
//       )
//     }
//   }
// export default Table
