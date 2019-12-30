import React from 'react';

const DayContext = React.createContext({
  sunday: 'D',
  monday: 'L',
  tuesday: 'M',
  wednesday: 'X',
  thurday: 'J',
  friday: 'V',
  saturday: 'S'

});

export default DayContext 