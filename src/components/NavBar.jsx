import React from 'react';


function NavBar(){
  return (
    <div className="row" style={{
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#3CC6FF',
        borderWidth: '2px',
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: '5px'
      }}>
      <div className="col-md-3">
        <a href='/'>Contact</a>
      </div>
      <div className="col-md-3">
        <a href='/#/about'>About Us</a>
      </div>
      <div className="col-md-3">
        <a href='/#/schedule'>Schedule</a>
      </div>
      <div className="col-md-3">
        <a href='/#/produce'>Produce</a>
      </div>
    </div>
  );
}

export default NavBar;
