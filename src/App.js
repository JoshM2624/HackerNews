import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Details from './components/Details'

class app extends Component {
  state = {
    randomUsers: []
}

componentDidMount(){
    fetch('https://randomuser.me/api?results=25')
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.results.map(users => (
        {
            name: `${user.name.first} ${user.name.last}`,
            username: `${user.login}`,
            email: `${user.email}`,
            location: `${user.location.street} ${user.location.city}`
        }
    )))
    .then(users => this.setState({
            randomUsers,
    }))
  }


render() {
  const {randomUsers} =this.setState;
  return(
    <div>
      <header>  
        <img src={image} />
        <h1>Fetching Data <button>Fetch Now</button></h1>
      </header>

    </div>
    

    
  )
}

}



 
export default app;