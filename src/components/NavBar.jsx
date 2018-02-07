import React from 'react';


function NavBar(){
  return (
    <div className="row" style={{padding: '10px', textAlign: 'center', backgroundColor: '#53c68c'}}>
      <div className="col-md-4">
        <a>Home</a>
      </div>
      <div className="col-md-4">
        <a>About Us</a>
      </div>
      <div className="col-md-4">
        <a>Contact Info</a>
      </div>
    </div>
  );
}

export default NavBar;
