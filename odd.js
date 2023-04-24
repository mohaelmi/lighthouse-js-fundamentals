const isOdd  = function (num) {
  return num % 2 !== 0;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));













//some javascript practising.

// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 10, 'community centre']
// ];


// const chooseStations = function (stations) {
//   let goodStations = []
//   for(let i = 0; i < stations.length; i++){
//     if(stations[i][stations.length-1] === "school" || stations[i][stations.length-1] === "community centre")
//       if(stations[i][1] >= 20){
//       goodStations.push(stations[i][0])
//   } }
  
//   return goodStations
//}


// const finalPosition = function (moves) {
//   let x = 0;
//   let y = 0;
//   let result  = [];
//   for(let val of moves){
//     if(val == 'north'){
//       y++
//     }if(val == 'south'){
//       y--
//     }
//     if(val == 'west'){
//       x--
//     }if(val == 'east'){
//       x++
//     }
//   }
    
//   result.push(x, y);
//   return result
// }
// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

// console.log(finalPosition(moves));


//console.log(chooseStations(stations));

// const howManyHundreds = function(bottleNumber){
  
//   let result = bottleNumber / 100;
  
//   return Math.floor(result)
// }

// console.log(howManyHundreds(894))