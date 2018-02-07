import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Schedule from './Schedule';
import ProduceList from './ProduceList';




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
      <Schedule/>
      <hr></hr>
      <br></br>
      <ProduceList/>
    </div>
  );
}



export default App;
