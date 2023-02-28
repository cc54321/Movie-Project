import React, { Component } from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>title</th>
            <th>actors</th>
            <th>plot</th>
            <th>imdbRating</th>
            <th>director</th>
            <th>year</th>
            <th>createdAt</th>
        </tr>
      </thead>
    );
  }


//table body simple component
const TableBody = (props) => {

    
    //iterate character data and create a row for each entry
    //use .map to iterate over each row and wrap it in an html table row


  

    const rows = props.data.map((row, index) => {

    return (      
    <tr key ={index}>
    <td>{row.title}</td>
    <td>{row.actors}</td>
    <td>{row.plot}</td>
    <td>{row.imdbRating}</td>
    <td>{row.director}</td>
    <td>{row.year}</td>
    <td>{row.createAt}</td>
    <td><button onClick={() => props.removeMovie(index)}>Delete</button></td>
    
    </tr>
            )      

    })
    
    return <tbody>{rows}</tbody>

}

class Table extends Component {
    render() {
  
      //props passed in from App
  const {movieData, removeMovie} = this.props;
  
      return (
        <table>
     <TableHeader/>
     <TableBody data = {movieData} removeMovie = {removeMovie}
     />
        </table>
      )
    }
  }
