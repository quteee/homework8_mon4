import React from "react";
import "./index.css"

export default class Parent extends React.Component {

  handleClick() {
    console.log('')
  }

  render() {
    return <div>
      <Child label='Name' input type='text' placeholder='Anton' onCLick={this.handleClick}/>
      <Child label='Email' input type='text' placeholder='antongg@gmail.com' onCLick={this.handleClick} />
      <Child label='pass' input type='password' placeholder='anton1301' onCLick={this.handleClick} />
      <Child label='Number' input type='number' placeholder='+996 555 38-71-03' onCLick={this.handleClick} />
    </div>

  }
}
class Child extends React.Component {
  render() {
    return <div>
      <div className='main'>
        <h4>{this.props.label}</h4>
        <input type={this.props.type}
               placeholder={this.props.placeholder}/>

      </div>
    </div>
  }
}


