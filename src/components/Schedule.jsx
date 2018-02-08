import React from 'react';
import PropTypes from 'prop-types';



function Schedule(props){
  return (
    <div style={{borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: 'black',
      padding: '30px',backgroundColor: '#33C4FF', height: '400px'}}>
      <h5><strong>Day </strong>:{props.day}</h5>
      <h5><strong>Location: </strong>{props.location}</h5>
      <h5><strong>Hours: </strong>{props.hours}</h5>
      <h5><strong>Booth: </strong>{props.booth}</h5>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Schedule;
