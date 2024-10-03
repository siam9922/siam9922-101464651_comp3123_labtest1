//Question 1: ES6 Features
//Create a script with a function named lowerCaseWords that takes a
//mixed array as input.
//The function will do the following.
//o return a promise that is resolved or rejected
//o filter the non-strings and lower case the remaining words



//Created a function named lowerCaseWords
function lowerCaseWords(mixedArray) { //it takes a mixed array as an input
  return new Promise((resolve, reject) => {
    
    //returns new promise which is either resolve or reject
    if (!Array.isArray(mixedArray)) { 
      
      //if the input inside is or isn't an array an error messsage will play
      reject('Input rejected');
    }

    //using the .filter it will remove the numbers inside the string 
    const result = mixedArray
    //this code will keep the string elements 
      .filter(item => typeof item === 'string')
      //this code will change each string to lowercase
      .map(item => item.toLowerCase());

    resolve(result);
  });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

//checks the result if it is a lowercase string or an error
lowerCaseWords(mixedArray)
  .then(result => console.log(result)) 
  .catch(error => console.error(error));

