import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  const React = require('react');

console.log(React.version);
    // const arr = [
    //   {id: '1', name: 'Post 1'},
    //   {id: '2', name: 'Post 2'},
    //   {id: '3', name: 'Post 3'}
    // ]
    // const list = arr.map( item => {
    //   return(
    //     <span key={item.id}>
    //     <Link to={`/posts/${item.id}`}>{item.name}</Link><br/>
    //     </span>
    //   )
    // })
    // return (
    //   <div>
    //     { list }
    //   </div>
    // )
    return [
      <div key='1'>Hello!</div>,
      <div key='2'>React</div>,
      <div key='3'>is awesome!</div>,
      <div key='4'>{React.version}</div>
    ]
}

export default Posts;
