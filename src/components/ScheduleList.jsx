import React from 'react';
import Schedule from './Schedule';

const masterSchedule = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];



function ScheduleList(){
  return (
    <div style={{padding: '15px'}}>
      <h2 style={{color: '#206040'}}>Schedule</h2>
      <div className="row">
        {masterSchedule.map((scheduleList, index) =>
          <div className="col-md-4">
            <Schedule
              day={scheduleList.day}
              location={scheduleList.location}
              hours={scheduleList.hours}
              booth={scheduleList.booth}
              key={index}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScheduleList;
