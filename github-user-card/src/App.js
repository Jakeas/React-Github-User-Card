import './App.css';
import React from 'react'
import axios from 'axios'
import Card from './components/Card'

 class App extends React.Component {
   state = {
    gitUser: {},
    followers: []
  }

    



  componentDidMount(){
    axios.get('https://api.github.com/users/jakeas')
        .then((res)=>{
          console.log(res.data)
          this.setState({
            gitUser: res.data
          }) 
            axios.get('https://api.github.com/users/jakeas/followers')
              .then((res)=>{
                console.log("nested", res.data)
                this.setState({
                  followers: res.data
                })
              })
                .catch((err)=>{
                console.log(err)
              })
        })
        .catch((err)=>{
          console.error(err)
        })
  }

  // componentDidMount(){
  //   axios.get('https://api.github.com/users/jakeas')
  //     .then((res)=>{
  //       console.log(res.data)
  //       this.setState({
  //         users: res.data //[0]
  //       }) 
  //     })
  //     .catch((err)=>{
  //       console.error(err)
  //     })
  //   axios.get('https://api.github.com/users/jakeas/followers')
  //     .then((res)=>{
  //       console.log("followers:", res.data)
  //       this.setState({
  //         users: res.data 
  //       }) 
  //     })
  //     .catch((err)=>{
  //       console.error(err)
  //     })
  // }

    render (){
      
      return(
      <div>
        <Card follower={this.state.gitUser} />
        {this.state.followers.map((follower)=>{
         return (<Card follower={follower}/>)
        })}
         
        
      </div>
      )
    }
}

export default App;
