const numbers = [
  [54,84,89],
  [67,55,34],
  [85,14,60],
];

for (let i = 0; i < numbers.length; i++) {
  for (let NumArr = 0; NumArr < numbers[i].length; NumArr++) {



    console.log(`${i + 1} ${NumArr + 1} = ${numbers[i][NumArr]}`);


  }
}