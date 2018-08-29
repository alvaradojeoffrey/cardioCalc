//imports
var _ = require('lodash');
const chalk = require('chalk');



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



const cardioCalc = (n) => {

  //For Users: 

  
  return n <= 7 ? assignDays(n): console.log(`please enter a ` + chalk.bgWhite.bold.red(`NUMBER`) + ` between 1-7`);

  //For Apps:
  // return n <= 7 ? console.log(`Assigning ${n} days.......`,'\n', assignDays(n)) : console.log(`please enter a ` + chalk.bgWhite.bold.red(`NUMBER`) +` between 1-7`);

}
const assignDays = (n) => {
  const rdmDays = _.sampleSize(wkdays, n);
  
  return rdmDays



}





console.log(cardioCalc(3));



