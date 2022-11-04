// Array is a collection of similar data types
// when we store multiple values in one value then we use arrays

// In javascript we have an Array Class, and
// Arrays are the protoType of this class

// In javasscript , we can store any type of value in the array
// index number starting from 0
// last index Number is -> arr.length - 1;

// Note -> Array jo bnta hai vo heap pr bnta hai and refrence pass hota hai

/*
What we will do in Array?
1. Traversal of Array
2. Searching and filter in Array
3. How to sort and compare an Array
4. How to insert add replace dete element in Array (CRUD)
5. Map() reduce() filter()
*/

// Searching

// 1.. indexOf -> It returns the first index of an element, jo sabse pehle found hoga vo
// return -1, if not found, It only moves forward

// console.log(friends.indexOf("dripti"));
// console.log(friends.indexOf("dripti", 4)); //  2nd parameter is kidr se start krna hai search krna

// 2. lastIndex() -> It return the index of last element or return -1 if the element not found
// var friends = ["arsh", "simran", "dripti", "dripti", "male", "dripti"];
// console.log(friends.lastIndexOf("dripti"));
// console.log(friends.lastIndexOf("dripti", 4)); // 2nd parameter is kidr se satrt kra search krna , eg: male se start kra search krna to backward move hoga

// 3. Array.prototype.includes()
// Jo bhi Data Array me put krre hai vo included hai ya nahi
// It return true or false , agr data mila to true otherwise false
// It is used in validation, eg: kya jo bhi array dekhre hai usme included hai ya nahi
// if true to yeh kaam krdo , It only moves forward

// var friends = ["arsh", "simran", "dripti", "dripti", "male", "dripti"];
// console.log(friends.includes("thapa")); // it search starts from 0 index
// console.log(friends.includes("arsh",2)); // 2nd parameter kidr se start krna hai search krna



// Filteration ------------------------------

// 1 ) Array.prototype.find()
// arr.find(callback(element,[index,[array]]) [, thisArg])
// It return the found element in array if array satifies the condtion and
// return undeifned if not find any element
// Only problem is that it return only one element

// const prices = [200, 300, 350, 400, 500, 550];

// // suppose  our condition is hume clothe buy krne hai unka [price < 400] kam hona chaiye
// const findElem = prices.find((currVal, index, array) => {
//   // Note: ik ik krke value aati jaegi idr
//   return currVal < 400;
// });

// console.log(findElem);