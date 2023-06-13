import React, { Component } from 'react'

export class AddNewComponent extends Component {
    constructor(props){
        super(props)
    
        this.state={
          name : "",
          price : "",
          countInStock : ""
        }
      }
    
      categoryHandler = event=>{
        this.setState(
          {
            name : event.target.value
          }
        )
      }
    
      priceHandler = event=>{
        this.setState(
          {
            price : event.target.value
          }
        )
      }
    
      countInStockHandler = event=>{
        this.setState(
          {
            countInStock : event.target.value
          }
        )
      }
    
    
    
      formSubmitHandler=event=>{
        event.preventDefault()
        console.log(
          this.state.name,
          this.state.price,
          this.state.countInStock
        );
    
        fetch('http://localhost:3500/api/v1/addnew',{
        method:'POST',
        crossDomain:true,
        headers:{
          'Content-type':'application/json',
          'Access-Control-Allow-Origin':'*'
        },
        body:JSON.stringify({
          name : this.state.name,
          price : this.state.price,
          countInStock : this.state.countInStock
    
        })
      })
    
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data);
        
    if(data.status=='OK'){
      window.localStorage.setItem('token',data.token)
      window.location.href = '/'
    }
      })
    
    
      }
    
      render() {
        const { name,price,countInStock } = this.state
        return (
          <form onSubmit={this.formSubmitHandler} className='form-container'>
            <h3>Add New Product</h3>
    
            <div className='mb-3'>
            <label>Category</label>
            <select id="dropdown" value={name} onChange={this.categoryHandler}>
            <option value="">Select</option>
            <option value="Watches">Watches</option>
            <option value="Shoes">Shoes</option>
            <option value="Laptops">Laptops</option>
            </select>
              
        
            </div>
    
            <div className='mb-3'>
              <label>Price</label>
              <input
              type='text'
              value={price}
              className='form-control'
              onChange={this.priceHandler}
              required
              />
            </div>
    
            <div className='mb-3'>
              <label>Quantity</label>
              <input
              type='text'
              value={countInStock}
              className='form-control'
              onChange={this.countInStockHandler}
              required
              />
            </div>
    
            
    
            <div className='d-grid'>
              <button type='submit' className='btn btn-primary'>Add</button>
            </div>
            
    
          </form>
        )
      }
    }

export default AddNewComponent