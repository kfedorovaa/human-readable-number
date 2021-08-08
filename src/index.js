module.exports = function toReadable (number) {
  let str = "";
  const to_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 
  'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dec = ['twenty','thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  if (Math.floor(number/100) > 0) {
    str = to_19[Math.floor(number / 100)] + ' hundred';
      if (number % 100 > 0) {
        if (number % 100 < 20) {
           str = str + ' ' + to_19[number % 100];
          
        } else if ((number % 100) % 10 == 0) {
            str = str + ' ' + dec[Math.floor((number % 100) / 10) - 2];
           
        } else if (Math.floor(number % 100 % 10) > 0){
          str = str + ' ' + dec[Math.floor((number % 100) / 10) - 2] + ' ' + to_19[Math.floor(number % 100 % 10)];
        }
      }
  } else if (number < 20) {
    str = to_19[number];
  } else if (number % 10 == 0) {
        str = dec[Math.floor(number / 10) - 2];
  } else {
        str = dec[Math.floor(number / 10) - 2] + ' ' + to_19[number % 10];
  }
    
return str;  
}
