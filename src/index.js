import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
// import { HashRouter, Route, Link } from 'react-router-dom';
// import { MemoryRouter, Route, Link } from 'react-router-dom';

// components
import Home from './components/home';
import Posts from './components/posts';
import Profiles from './components/profiles';
import PostItem from './components/post_item';

const App = () => {
  return(
    // <HashRouter>
    // <MemoryRouter>
    <BrowserRouter>
      <div>
        <header>
          <Link to='/'>Home</Link><br/>
          <NavLink
            to='/posts'
            activeStyle={{color: 'green'}}
            activeClassName='selected'
            >Posts</NavLink><br/>
          <Link to='/profiles'>Profiles</Link><br/>
        </header>
        <hr/>
        <Route path='/' exact component={Home}/>
        <Route path='/posts' exact component={Posts}/>
        <Route path='/posts/:id' component={PostItem}/>
        <Route path='/profiles' component={Profiles}/>
      </div>
    </BrowserRouter>
    // </MemoryRouter>
    // </HashRouter>
  )
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
