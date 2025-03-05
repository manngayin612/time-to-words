// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {

  const hours = [
    'midnight', 
    'one', 
    'two', 
    'three',
    'four',
    'five',
    'six',
    'sever',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve'
  ]

  const minutes = [
    'o\'clock',
    'one', 
    'two', 
    'three',
    'four',
    'five',
    'six',
    'sever',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
  ]
  
  const [hour, minute] = time.split(":");
  
  // convert the hour string to an integer --> index in the hours array --> get corresponding word
  const index = parseInt(hour);
  let hourStr = hours[index];
  console.log(hourStr)
  
// take the minute stinrg --> integer --> check if larger or small than 30
  const min = parseInt(minute)
  let minuteStr = ""

 if (time === '0:00') {
    return 'midnight';
  } else if (time==='12:00') {
    return 'midday';
  }

  if (min === 30 ) {
    minuteStr = 'half past'
  } else if (min === 15) {
    minuteStr = 'quarter past'
  } else if (min === 45) {
    minuteStr = 'quarter to'
    hourStr = hours[index +1]
  } else {
    
    if (min === 0) {
      minuteStr = 'o\'clock'
      return `${hourStr} ${minuteStr}`;
    } else if (min > 30) {
      minuteStr = `${minutes[60 -min]} to`
      hourStr = hours[index+1]
    } else {
      minuteStr = `${minutes[min]} past`

    }
  }

  // return 'half past eight';
  console.log(`${minuteStr} ${hourStr}`)
  return `${minuteStr} ${hourStr}`;
}

module.exports = { convertTimeToWords };