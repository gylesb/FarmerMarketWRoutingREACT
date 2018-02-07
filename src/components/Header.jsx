import React from 'react';



function Header(){
  //to override bootstrap styles we need to attach new styling directly to a specific tag
  return (
    <div style={{padding: '40px', textAlign: 'center'}}>
      <h1 style={{fontSize: '56px'}}>Farmers Market</h1>
    </div>
  );
}



export default Header;
