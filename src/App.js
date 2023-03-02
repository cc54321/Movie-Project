import logo from './logo.svg';
import './App.css';
import Table from './components/Table'
import MovieForm from './components/MovieForm';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';


const DATA_URL = "https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json"


function App() {

	//we make a hook for movies into the state
  // because we are in a function
  const [movies, setMovies] = useState();

// use effect is equivalent to "Component did Mount" runs
// after a  component has been rendered.
// component first renders when it's created
// also renders when a change happens to it 
  useEffect(() => {

	//asyncronously request data 
	// wait for promise to resolve
	// const moviesData = []
	fetch(DATA_URL)
	.then((result) => result.json())
	.then((result) => {
		setMovies(result);
	});

  }, [])
  // when we pass [] to useEffect -> it only runs once in the beginning
  // we can subscript multiple fields for it to run on 	


  const addMovie = (movie) => {
     setMovies([...movies, movie]);
  }

  const removeMovie = (toDelIdx) => {
    const filteredMovies = movies.filter((_, index) => {
       return index !== toDelIdx
    })
    setMovies(filteredMovies)
  }


  const filterMovies = (input, field) => {

	// //show all films if there is no query 
	// if (searchField.trim().length === 0) {
	// 	setMovies(moviesData);
	// 	return;
	// }

	 const moviesFiltered = movies.filter((movie) => {
		   return movie[field].toLowerCase().includes(input.toLowerCase())
	 })

	 setMovies(moviesFiltered)
  } 
  
  

  return (
 <div className="App">
  <SearchBar	
	filterMovies={filterMovies}
  />
  <Table 
     movies={movies || []}
     removeMovie={removeMovie}
	
  />
  <MovieForm 
    addMovie={addMovie}
  />
</div>
  );
}


// 


/// example code of subscribing changes to props 
// function ThreeCounts() {
// 	const [count1, setCount1] = useState(0);
// 	const [count2, setCount2] = useState(0);
// 	const [count3, setCount3] = useState(0);
  
// 	useEffect(() => {
// 	  console.log("changed!");
// 	}, [count1]);
  
// 	return (
// 	  <div>
// 		{count1} {count2} {count3}
// 		<br />
// 		<button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
// 		<button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
// 		<button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
// 	  </div>
// 	);
//   }
  
  


export default App;



// import React, { component } from 'react';
// import MovieForm from './MovieForm'
// import Table from './componets/Table'






// class App extends component {
//     // set initial state of component 
//     state = {
//         MovieForm: [{
//             title: 'Patriot',
//             actors:'Mel Gibson',
//             plot: 'Peaceful farmer Benjamin Martin is driven to lead the Colonial Militia during the American Revolution when a sadistic British officer murders his son.',
//             imbdRating:'7.2',
//             director:'Roland Emmerich',
//             Year:'1996',
//             date: 'dateAdded',
//             },
//             {
//             title: 'The Dark Night',
//             actors:'Christian Bale',
//             plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
//             imbdRating:'9.0',
//             director:'Christian Noland',
//             Year:'2008',
//             date: 'dateAdded',
//             },
//             {
//             title: 'The Fugitive',
//             actors:'Harrison Ford',
//             plot: 'Dr. Richard Kimble, unjustly accused of murdering his wife, must find the real killer while being the target of a nationwide manhunt led by a seasoned U.S. Marshal.',
//             imbdRating:'7.8',
//             director:'Andrew Davis',
//             Year:'1993',
//             date: 'dateAdded',
//             },
//             {
//             title: 'Gladitor',
//             actors:'Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver',
//             plot: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
//             imbdRating:'8.5',
//             director:'Ridley Scott',
//             Year:'2000',
//             date: 'dateAdded',
//             },
//             {
//             title: 'The Terminator',
//             actors:' Arnold Schwarzenegger, Linda Hamilton, Michael Biehn, Paul Winfield',
//             plot: 'A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanitys future salvation.',
//             imbdRating:'8.1',
//             director:'James Cameron',
//             Year:'1984',
//             date: 'dateAdded',
//             },
//             {
//             title: 'Jurassic Park',
//             actors:' Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough',
//             plot: 'A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the parks cloned dinosaurs to run loose.',
//             imbdRating:'8.2',
//             director:'Steven Spielberg',
//             Year:'1993',
//             date: 'dateAdded',
//             },
//         ]
//     }


//     removeMovie = (index) => {
//         //defined this.state
//             const { movies } = this.state 
    
//             //  update the state 
//             this.setState({
//                 // remove character 
//                 // list excluding that character
//                 movies: movies.filter((_, i) => {
//                     return i !== index
//                 }),
//             })
//         } 
    
    
//     addMovie = movie => {
            
//         this.setState({movies: [...movies, movie ]});
//       } 
       
        
        
//             render (){
//             return (
//         <div>
           
//             <MovieForm addMovie ={this.addMovie}/>
//             <Table movieData={this.state.movies} 
//             removeMovie = {this.removeMovie}/>
//         </div>
        
//             )
        
    
//     }
    
//     }

    


   


// export default App