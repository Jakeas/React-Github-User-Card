import './App.css';
import React from 'react'
import axios from 'axios'
import Card from './components/Card'

 class App extends React.Component {
   state = {
    user: {}
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/jakeas')
      .then((res)=>{
        console.log(res.data)
        this.setState({
          user: res.data //[0]
        }) 
      })
      .catch((err)=>{
        console.error(err)
      })
  }
    render (){
      
      return(
      <div>
        
        <Card user={this.state.user}/>
        
      </div>
      )
    }
}

export default App;
