import React from 'react';


function NavBar(){
  return (
    <div className="row" style={{padding: '10px', textAlign: 'center', backgroundColor: '#53c68c'}}>
      <div className="col-md-2">
        <a href='/'>Home</a>
      </div>
      <div className="col-md-2">
        <a>About Us</a>
      </div>
      <div className="col-md-2">
        <a>Contact Info</a>
      </div>
      <div className="col-md-2">
        <a href='/#/schedule'>Schedule</a>
      </div>
      <div className="col-md-2">
        <a href='/#/produce'>Produce</a>
      </div>
    </div>
  );
}

export default NavBar;
