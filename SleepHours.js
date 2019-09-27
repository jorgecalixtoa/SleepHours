const getSleepHours = day => {
  switch (day){
		case 'Monday':
      return 8;
    case 'Tuesday':
      return 7;
    case 'Wednesday':
      return 6;
    case 'Thursday':
      return 5;
    case 'Friday':
      return 9;
    case 'Saturday':
      return 10;
    case 'Sunday':
      return 11;
    default:
      console.log('error!');
  };
}
const getAcjatualSleepHours = () => {
	return getSleepHours('Monday') +
 			getSleepHours('Tuesday') +
 			getSleepHours('Wednesday') +
  		getSleepHours('Thursday') +
 			getSleepHours('Friday') +
  		getSleepHours('Saturday') +
  		getSleepHours('Sunday');
};
const getIdealSleepHours = () => {
const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
if (actualSleepHours === idealSleepHours){
  console.log('You might be full of energy buddy')
	
}else if (actualSleepHours > idealSleepHours){
    console.log('You are oversleeping by' + 
    (idealSleepHours - actualSleepHours) + 'hours.');
		
}else if (actualSleepHours < idealSleepHours){
    console.log('You only slept'+ (actualSleepHours - idealSleepHours) 
    + 'You have not slept enough');
}
};
calculateSleepDebt();	
