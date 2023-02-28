import React, { component } from 'react';
import MovieForm from './MovieForm'
import Table from './App'






class App extends component {
    // set initial state of component 
    state = {
        MovieForm: [{
            title: 'Patriot',
            actors:'Mel Gibson',
            plot: 'Peaceful farmer Benjamin Martin is driven to lead the Colonial Militia during the American Revolution when a sadistic British officer murders his son.',
            imbdRating:'7.2',
            director:'Roland Emmerich',
            Year:'1996',
            date: 'createdAt',
            },
            {
            title: 'The Dark Night',
            actors:'Christian Bale',
            plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            imbdRating:'9.0',
            director:'Christian Noland',
            Year:'2008',
            date: 'createdAt',
            },
            {
            title: 'The Fugitive',
            actors:'Harrison Ford',
            plot: 'Dr. Richard Kimble, unjustly accused of murdering his wife, must find the real killer while being the target of a nationwide manhunt led by a seasoned U.S. Marshal.',
            imbdRating:'7.8',
            director:'Andrew Davis',
            Year:'1993',
            date: 'createdAt',
            },
            {
            title: 'Gladitor',
            actors:'Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver',
            plot: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
            imbdRating:'8.5',
            director:'Ridley Scott',
            Year:'2000',
            date: 'createdAt',
            },
            {
            title: 'The Terminator',
            actors:' Arnold Schwarzenegger, Linda Hamilton, Michael Biehn, Paul Winfield',
            plot: 'A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanitys future salvation.',
            imbdRating:'8.1',
            director:'James Cameron',
            Year:'1984',
            date: 'createdAt',
            },
            {
            title: 'Jurassic Park',
            actors:' Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough',
            plot: 'A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the parks cloned dinosaurs to run loose.',
            imbdRating:'8.2',
            director:'Steven Spielberg',
            Year:'1993',
            date: 'createdAt',
            },
        ]
    }


    removeMovie = (index) => {
        //defined this.state
            const { movies } = this.state 
    
            //  update the state 
            this.setState({
                // remove character 
                // list excluding that character
                movies: movies.filter((_, i) => {
                    return i !== index
                }),
            })
        } 
    
    
    addMovie = movie => {
            
        this.setState({movies: [...this.state.movies, movie ]})
      } 
       
        
        
            render (){
            return (
        <div>
           
            <MovieForm addMovie ={this.addMovie}/>
            <Table movieData={this.state.movies} 
            removeMovie = {this.removeMovie}/>
        </div>
        
            )
        
    
    }
    
    }

    


   


export default App