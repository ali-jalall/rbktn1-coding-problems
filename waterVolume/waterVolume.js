/*
You are given an array of numbers that each represent the height of an adjoining building.
During torrential rain, water collects in the spaces between buildings. 
What is the maximum amount of water collected by the buildings represented by the array?

Explanation: An input of [3,0,3] can be visualized as such:

 __    __
|  |//|  |
|  |//|  |
|  |//|  |
‾‾‾‾‾‾‾‾‾‾
The area of water in the above picture (and the result of calling volume([3,0,3])) is 3.

Challenge: do this in O(n) with < 2 pass-throughs

volume([ 3, 0, 3 ]) // 3
volume([ 1, 2, 3, 4, 0, 5, 3, 1 ]) // 4
volume([1,2,3,2,1]) // 0

*/

// const volume = (heights) => {
//   for (let i = 0; i < heights.length; i++) {
//     for (let j = i; j < heights.length; j++) {
//       if (heights[j] < heights[i]) {
//         for (let k = j; k < heights.length; k++) {
//           if (heights[k] > heights[j]) {
//             let waterVolume = heights[--j] - heights[++j]
//             return waterVolume
//           }
//         }
//       }
//     }
//   }
//   return 0;
// }

const volume = (heights) => {
  let result = 0
  for (let i = 0; i < heights.length; i++) {
    const element = heights[i];

    if (element < heights[i + 1]) {
      continue;
    } else {
      if (heights[i + 1] < heights[i + 2]) {
        // console.log(heights[i + 1])
        // result = heights[i + 1];
        return element
      }
    }
  }
  return result
};

console.log(volume([3, 0, 3])); // 3
console.log(volume([1, 2, 3, 4, 0, 5, 3, 1])); // 4
console.log(volume([1, 2, 3, 2, 1])); // 0
