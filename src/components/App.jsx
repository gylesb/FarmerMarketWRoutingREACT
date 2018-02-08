import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import ScheduleList from './ScheduleList';
import ProduceList from './ProduceList';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';



function App(){
  return (
    <div className="container">
      <style jsx global>{`
        body {
          font-family: Trebuchet MS;
          padding: 30px;
          background-color: #80DAFF;
        }
      `}</style>
      <NavBar/>
      <Header/>
      <Switch >
        <Route path='/schedule' component={ScheduleList} />
        <Route path='/produce' component={ProduceList} />
      </Switch>
    </div>
  );
}



export default App;
