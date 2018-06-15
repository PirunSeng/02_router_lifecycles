import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
// import { HashRouter, Route, Link } from 'react-router-dom';
// import { MemoryRouter, Route, Link } from 'react-router-dom';

// components
import Home from './components/home';
import Posts from './components/posts';
import Profiles from './components/profiles';
import PostItem from './components/post_item';
import Life from './components/lifecycle';
import Conditional from './components/conditional';
import User from './components/user';

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
          <Link to='/life'>Life</Link><br/>
          <Link to='/conditional'>Conditional</Link><br/>
          <Link to='/user'>User</Link><br/>
        </header>
        <hr/>
        // Switch, sends less specific route to the bottom
        <Switch>
          <Route path='/profiles' component={Profiles}/>
          <Route path='/posts/:id' component={PostItem}/>
          <Route path='/posts' component={Posts}/>
          <Route path='/life' component={Life}/>
          <Route path='/conditional' component={Conditional}/>
          <Route path='/user' component={User}/>
          <Route path='/' component={Home}/>
        </Switch>
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
