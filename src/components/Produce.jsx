import React from 'react';
import PropTypes from 'prop-types';





function Produce(props){
  return (
    <div style={{borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: 'lightGray',
      padding: '20px',backgroundColor: '#53c68c'}}>
      <p style={{fontSize: '22px'}}><strong>{props.month}</strong></p>
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
