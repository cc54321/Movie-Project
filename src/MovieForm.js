import React, { Component } from 'react';

class MovieForm extends Component {

constructor(props){
    super(props);

    this.initialState = {
        title:'',
        actors:'',
        plot: '',
        imbdRating:'',
        director:'',
        year:'',
        createdAt: Date()
    };

    this.state = this.initalState;


}

    handleChange = event => {
        //get name, value out of target (element that changed)
        const {name, value } = event.target;
      

        //update our state 
        this.setState({
            [name]: value
        });
    
    onFormSubmit = (event) => {
        //submit standard code submits
        event.preventDefault();
        
        //set the current state of our form to the handle submit
        this.props.addMovie(this.state);

        //clear inputs by setting form to inital state
        this.initialState.createdAt = new Date().toString();
        
        this.setState(this.initalState);
      }

       


    render(); {
        //hook in data from state
        const { title, actors, plot, imdbRating, director, year, createdAt } = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
            <label htmlFor="title">title: </label><br/>
            <input type="text" 
                   id="title" 
                   name="title" 
                   value={title} 
                   onChange={this.handleChange}
                   /><br/>
            <label htmlFor="actor">actors: </label><br/>
            <input type="text" 
                   id="actors" name="actors" 
                   value={actors} 
                   onChange={this.handleChange}
                    /><br/>
            <label htmlFor="plot">plot: </label><br/>
            <input type="text" 
                   id="plot"
                   name="plot" value={plot} onChange={this.handleChange}
                   /><br/>
            <label htmlFor="imdbRating">imdbRating: </label><br/>
            <input type="text" 
                   id="imdbRating" 
                   name="imdbRating" 
                   value={imdbRating} 
                   onChange={this.handleChange}
                   /><br/>
            <label htmlFor="director">director: </label><br/>
            <input type="text" 
                   id="director" 
                   name="director" 
                   value={director} 
                   onChange={this.handleChange}/><br/>
            <label htmlFor="year">year: </label><br/>
            <input type="text" 
                   id="year" 
                   name="year" 
                   value={year} 
                   onChange={this.handleChange}
                   /><br/>
            <label htmlFor="createdAt">createdAt: </label><br/>
            <input type="text" 
                   id="createdAt" 
                   name="createdAt" 
                   value={createdAt} 
                   onChange={this.handleChange}
                   />
            <button type="submit">
                Submit
            </button>
        </form> 
        )
    }
}

  
  
}








export default MovieForm