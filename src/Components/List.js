import React, { Component } from "react";
// import { movies } from "./getMovies";
import axios from "axios";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      hover: '',
      movies: []
    };
  }

  handleEnter = (id) => {
    this.setState({
      hover: id
    });
  };

  handleLeave = () => {
    this.setState({
      hover: '',
      currPage: 1,
    });
  };

  async componentDidMount() {
    // let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=https://api.themoviedb.org/3/movie/popular?api_key=a6582e8cc27b18445abe418be557fc14&language=en-US&page=1");
    // let data = await res.json();
    let data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a6582e8cc27b18445abe418be557fc14&language=en-US&page=1");
    console.log(data);
    this.setState({
      movies: [...data.data.results]
    })
  }

  // async componentDidUpdate() {
  //   // let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=https://api.themoviedb.org/3/movie/popular?api_key=a6582e8cc27b18445abe418be557fc14&language=en-US&page=1");
  //   // let data = await res.json();
  //   if(this.state.currPage){
  //   let data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a6582e8cc27b18445abe418be557fc14&language=en-US&page=${this.state.currPage}`);
  //   console.log(data);
  //   this.setState({
  //     movies: [...data.data.results]
  //   })
  // }
  // }

  async getUpdatedMovies() {
    console.log("getUpdatedMovies is called");
  let data = await axios.get(
         `https://api.themoviedb.org/3/movie/popular?api_key=a6582e8cc27b18445abe418be557fc14&language=en-US&page=${this.state.currPage}`
      );
      console.log(data.data);
      this.setState({
        movies: [...data.data.results],
      });
  }
    
 handlePrevPage = () => {
  if(this.state.currPage > 1){
    this.setState({currPage:this.state.currPage-1},this.getUpdatedMovies)
    }
 }
 
 handleNextPage = () => {
  this.setState({currPage:this.state.currPage+1},this.getUpdatedMovies)
  }
 

  render() {
    // let movies = movies.results;
    return (
      <>{
        this.state.movies.length == 0 ?
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> : (
            <>
              <div>
                <h3 className="trending display-3">Trending</h3>
                <div className="movies-list">
                  {this.state.movies.map((movieObj) => {
                    return (
                      <div className="card movie-card" onMouseEnter={() => this.handleEnter(movieObj.id)} onMouseLeave={this.handleLeave} key={movieObj.id}>
                        <img
                          src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                          className="card-img-top movie-img"
                          alt="..."
                        />
                        <h5 className="card-title movie-title">
                          {movieObj.original_title}
                        </h5>
                        {/* <p className="card-text movie-text">{movie.overview}</p> */}
                        <div className="button-wrapper">
                          {this.state.hover == movieObj.id && (
                            <a className="btn btn-info movie-button">
                              Add to Favourites
                            </a>)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <nav aria-label="Page navigation example" className="pagination">
                <ul className="pagination">
                  <li className="page-item" onClick={this.handlePrevPage}><a className="page-link" >Previous</a></li>
                
                  <li className="page-item"><a className="page-link" >{this.state.currPage}</a></li>
                 
                  <li className="page-item" onClick={this.handleNextPage}><a className="page-link" >Next</a></li>
                </ul>
              </nav>

            </>
          )
      }
      </>
    );
  }
}