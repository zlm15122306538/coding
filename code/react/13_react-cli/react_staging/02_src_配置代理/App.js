import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentData = ()=>{
    axios.get('http://localhost:3000/api1/students').then(
      (response)=>{
        console.log('success',response.data);
      },
      (error)=>{
        console.log('fail',error);
      }
    )
  }
  getCarData = ()=>{
    axios.get('http://localhost:3000/api2/cars').then(
      response=>{
        console.log('success',response.data);
      },
      error=>{
        console.log('errot',error);
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick = {this.getStudentData}>获取学生信息</button>
        <button onClick = {this.getCarData}>获取汽车信息</button>
      </div>
    )
  }
}
