import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex', justifyContent:"center", padding:"1 rem", alignItems:"center", background:"lightblue", textDecorationColor:"black"}}>
        <h1>Movies App</h1>
        <h2 style={{marginLeft:"2rem"}}>Favourites</h2>
      </div>
    )
  }
}
