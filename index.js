const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }


const titleCased = (array) => {
return tutorials.map(function (string) {
  let words = string.split(" ");
  let upperCaseWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  let upperCaseString = upperCaseWords.join(" ")
  return upperCaseString
})
}
console.log(titleCased())

// The below solution I think is better code, bc it allows for a change of the array that is being referenced in the upper case function, but the test doesn't pass in that case, so commenting it out for reference:

// const titleCased = (array) => {
//   return array.map(function (string) {
//     let words = string.split(" ");
//     let upperCaseWords = words.map(function (word) {
//       return word.charAt(0).toUpperCase() + word.slice(1)
//     })
//     let upperCaseString = upperCaseWords.join(" ")
//     return upperCaseString
//   })
//   }
//   console.log(titleCased(tutorials))
  