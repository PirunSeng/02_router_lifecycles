import React, { Component } from 'react';

class Life extends Component {
  // steps/lifecycle
  // 1. get default props
  // 2. set default state
  state = {
    title: 'Life Cycle'
  }
  // 3. before render
  componentWillMount(){
    console.log('componentWillMount')
    // document.querySelector('h3').style.color = 'red';
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.title === 'Something else')
      return false;
    return true;
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  // 4. render jsx, render() is a default method.
  render(){
    console.log('RENDER')
    return(
      <div>
        <h3>{ this.state.title }</h3>
        <div onClick={
          ()=> this.setState({
          title: 'Something else'
          })
        }>CLICK to change title</div>
      </div>
    )
  }

  // 5. after render
  componentDidMount(){
    console.log('componentDidMount')
    document.querySelector('h3').style.color = 'red';
  }
}

export default Life;
