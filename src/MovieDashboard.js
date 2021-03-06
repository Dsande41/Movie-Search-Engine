import React, { Component } from 'react';
// import {Fetch} from 'react-request';
import Coverflow from 'react-coverflow';



class MovieDashboard extends Component {
    constructor(props){
        
        console.log('hello');
        super(props);
        // this.itemSelected=this.itemSelected.bind(this);
        this.state={
            
          movies:[{
              Poster:'',
              Title:''

          }],
          query:'',
        }
      }

      fn=()=>{

      }
     

  searchMovies =()=>{
     fetch(`http://www.omdbapi.com/?s=${this.state.query}&apikey=bd23d0c5`)
        .then(movies=>{
           return  movies.json();
        })
        .then(movies=>{
            console.log(movies.Search);
            this.setState({
                movies: movies.Search
            })

        })

  }


  handleQueryInput=(event)=>{
      this.setState({
          query: event.target.value

          })
  }
  render() {

    return (
        <div >
           <input className="input-class" type="text" 
                value={this.state.query}
                onChange={
                    this.handleQueryInput
                }
            />
            <button className="button-class" onClick={this.searchMovies}>
                Search Movies</button>
             <div className="parent">   
             <Coverflow
                width={960}
                height={500}
                displayQuantityOfSide={4}
                navigation={false}
                enableHeading={false}
                infiniteScroll={false}
                clickable={true}
              
            >
      
      {

    this.state.movies.slice().map((movie ,i)=>(

    <img
        key={i}
        src={movie.Poster}
        alt={movie.Title}
        style={{width: '100%' }}
      />)
)
}
    
  </Coverflow>
        
        </div>
        </div>
     
    );
  }

  
}

export default MovieDashboard;