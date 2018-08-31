//imports
var _ = require('lodash');

//Weekday variable arr of objects
const wkdays = [
  {
    name: 'Mon',
    position: 1
  },
  {
    name: 'Tue',
    position: 2
  },
  {
    name: 'Wed',
    position: 3
  },
  {
    name: 'Thu',
    position: 4
  },
  {
    name: 'Fri',
    position: 5
  },
  {
    name: 'Sat',
    position: 6
  },
  {
    name: 'Sun',
    position: 7
  }
];

const randomize = (numDays) => {

if (numDays >= 1) 
{
  const chosenDays = 
    _.sampleSize(wkdays, numDays)
    .sort((a, b) => a.position - b.position);
  return chosenDays
}

else 
return console.log('Please choose a value between 1-7')
}

console.log(randomize(2));