import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Schedule from './Schedule';
import ProduceList from './ProduceList';
import { Switch, Route } from 'react-router-dom';



function App(){
  return (
    <div className="container">
      <style jsx global>{`
        body {
          font-family: Helvetica;
          padding: 30px;
          background-color: #b3e6cc;
        }
      `}</style>
      <NavBar/>
      <Header/>
      <Switch >
        <Route path='/schedule' component={Schedule} />
        <Route path='/produce' component={ProduceList} />
      </Switch>
    </div>
  );
}



export default App;
