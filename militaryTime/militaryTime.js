/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

let military = {
  '12:am': '00:',
  '1:am': '01:',
  '2:am': '02:',
  '3:am': '03:',
  '4:am': '04:',
  '5:am': '05:',
  '6:am': '06:',
  '7:am': '07:',
  '8:am': '08:',
  '9:am': '09:',
  '10:am': '10:',
  '11:am': '11:',
  '12:pm': '12:',
  '1:pm': '13:',
  '2:pm': '14:',
  '3:pm': '15:',
  '4:pm': '16:',
  '5:pm': '17:',
  '6:pm': '18:',
  '7:pm': '19:',
  '08:pm': '20:',
  '09:pm': '21:',
  '10:pm': '22:',
  '11:pm': '23:',
}

function toMilitary(time) {
  
}