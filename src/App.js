import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './containers/Dashboard';
import { News } from './containers/News/index';
import { Blogs } from './containers/Blogs/index';
import { Switch, Route } from 'react-router-dom';
import { Gallery } from './containers/Gallery';
import { Events } from './containers/Events';
import { Item } from './containers/News/Item';

function App() {


  return (
    <div className="flex h-full">
      <NavBar />
      <main className="flex-1 font-serif">
        <TopBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/News" component={News} />
          <Route exact path="/News/Item" component={Item} />
          <Route exact path="/Blogs" component={Blogs} />
          <Route exact path="/Events" component={Events} />
          <Route exact path="/Gallery" component={Gallery} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
