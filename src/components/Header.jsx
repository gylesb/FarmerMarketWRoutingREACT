import React from 'react';



function Header(){
  //to override bootstrap styles we need to attach new styling directly to a specific tag
  return (
    <div style={{padding: '60px', textAlign: 'center'}}>
      <h1 style={{fontSize: '80px'}}>Avery's Farms</h1>
    </div>
  );
}



export default Header;
