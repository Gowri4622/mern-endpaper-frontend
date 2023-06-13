import React, { Component } from 'react'
import axios from 'axios'
import './HomeComponent.css'

export class HomeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            userData:''
          
        }
      }

    componentDidMount(){
        fetch('http://localhost:3500/api/v1/productdata',{
    method:'POST',
    crossDomain:true,
    headers:{
      'Content-type':'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body:JSON.stringify({
      token :  window.localStorage.getItem('token')

    })
  })

  .then((response)=>response.json())
  .then((data)=>{
    console.log(data)
    this.setState({
        userData : data.data
    })
  
    
   
  })
    }
  render() {
    const {userData} = this.state
    return (
        
      <div>
        Name : <h1>{userData.name}</h1>
        Price : <h1>{userData.price}</h1>
      </div>
    )
  }
}
    

export default HomeComponent