// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// psuedo coding
// make a describe statement, describe (arrayShuffler)
// test (it should shuffle the array without the first item)
// declare a const for the results of your shuffled array
// expect shuffle array to not be equal to the original array
// expect shuffled array to contain the other items for the array, i.e blue green yellow pink


describe("arrayShuffler", () => {
  it('should shuffle the array without the first item', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"];
    const shuffledArray = arrayShuffler(colors1)
    expect(shuffledArray).not.toEqual(colors1)
    expect(shuffledArray).toEqual(expect.arrayContaining(colors1.slice(1)))
  })
})


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// Psuedo coding
// Make a function called arrayShuffler
// make the paramater an array 
// declare a new const in the function that is going to by our array with first item removed using the .shift method
// now we will shuffle the rest of the items in the array by shuffling the  indexes in the array
// use a loop to iterate through the array
// declare a new const j= math.floor(math.random()*(i+1))
// were assigned j to a randomly generated index
// swapping that index with i, this is known as the fisher-yates shuffle algotrithm
// return the array

function arrayShuffler(arr) {
  const removedItem = arr.shift()
  let j
  for (let i = arr.length-1; i >= 0; i --){
    j = Math.floor(Math.random()* (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
shuffledArray = arrayShuffler(colors1)


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
// psuedocode
// descripe the endTally function
// takes two values in an object and returns the final result
// expect endtally to equal 11

describe("endTally", () => { 
  it("should calculate the end tally correctly", () => { 
    const votes1 = { upVotes: 13, downVotes: 2 }
    const votes2 = { upVotes: 2, downVotes: 33 }
    const result1 = 11
    const result2 = -31
    expect(endTally(votes1)).toEqual(result1)
    expect(endTally(votes2)).toEqual(result2)
  })
})


const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// psuedo coding
// declare a function, calculateEndTally
// check to see if the input is a valid object using the typeOf operator to check if votes is an object
// using the "in" operator we can check if upvotes and downVotes are in the votes object
// extract the upVotes and downVotes into a new variable
// declare a new varible thats subtracting Upvotes from downvotes that gives us the endTally
// return endTally


function endTally(votes) {
  if (typeof votes === 'object' && 'upVotes' in votes && 'downVotes' in votes) {
    const { upVotes, downVotes } = votes
    const endTally = upVotes - downVotes
    return endTally
  } 
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
// psuedocode
// describe "mergedarrays" it will merge two arrays with no duplicates
// expect merged array to contain arr1 and arr2 

describe('mergeArrays', () => {
  it('should merge two arrays and return unique values', () => {
    const mergedArray = mergeArrays(dataArray1, dataArray2)
    const expectedArray = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(mergedArray).toEqual(expectedArray)
  })
})


const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// Psuedocode
// declare a function
// use arr1 and arr2 for the paramaters
// decalare a new variable that will be our merged array
// merge the array using the spread operator
// create a set from the merged array to remove duplicates
// return the array with no ducplicates

function mergeArrays(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2]
  const uniqueArray = [...new Set(mergedArray)]
  return uniqueArray
}