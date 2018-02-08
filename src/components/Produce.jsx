import React from 'react';
import PropTypes from 'prop-types';





function Produce(props){
  return (
    <div style={{borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: 'black',
      padding: '40px',backgroundColor: '#3CC6FF'}}>
      <p style={{fontSize: '20px'}}><strong>{props.month}</strong></p>
      <ul>
      {props.selection.map((item,i) =>
        <li>{item}</li>
      )}
      </ul>
    </div>
  )
}
Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Produce;
