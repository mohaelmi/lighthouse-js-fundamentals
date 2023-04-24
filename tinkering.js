// function multiply(a, b) {
//   return a * b;
// }

// const result = multiply(2, 4);

// console.log(result);

// const whichSchool  = function (age) {
//   if(age < 13) {
//     console.log("Elementary School")
//   }else if(age <= 13 && age >= 18){
//     console.log("Secondary School")
//   }else {
//     console.log("Lighthouse Labs")
//   }
// }

// whichSchool(11)


// function printNum() {
//   let num = 100;
//   while(num <= 200){
//     if(num % 3 == 0){
//       console.log(num)
//     }else if(num % 4 == 0){
//       console.log("Lighthouse")
//     }else if(num % 3 == 0 && num % 4 == 0){
//       console.log("LoopyLighthouse")
//     }
//     num++;
//   }
// }

// printNum();



let num = 100;
while(num <= 200){
 
  if(num % 3 === 0){
    console.log("Loopy")
  }
  if(num % 4 === 0){
    console.log("Lighthouse")
  }
  if(num % 12 === 0){
    console.log(num)
  }
  num++;
  //console.log(num)
}