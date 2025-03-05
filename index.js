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
    'seven',
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
    'seven',
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
  const hourIndex = parseInt(hour);
  let hourStr = hours[hourIndex];
  
// take the minute stinrg --> integer --> check if larger or small than 30
  let minuteStr = ""
  const min = parseInt(minute)

  if (min === 0) {
    return hourIndex === 0 ? 'midnight' : (hourIndex === 12? 'midday' : `${hourStr} o'clock`);
  }

  if (min === 15) {
    minuteStr = 'quarter past'
  } else if (min === 30) {
    minuteStr = 'half past'
  } else if (min === 45) {
    minuteStr = 'quarter to' 
    hourStr = hours[hourIndex +1] || hours[1]
  } else if (min > 30) {
      minuteStr = `${minutes[60 -min]} to`
      hourStr = hours[hourIndex+1] || hours[1]
  } else {
      minuteStr = `${minutes[min]} past`
  }
  return `${minuteStr} ${hourStr}`;
}

module.exports = { convertTimeToWords };