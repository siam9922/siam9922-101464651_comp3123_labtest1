
//Question 2: Promises
//● Given the script file callbacks.js, write a script that does the following:
//o Create a method resolvedPromise that is similar to
//delayedSuccess and resolves a message after a timeout of 500ms.
//o Create a method rejectedPromise that is similar to
//delayedException and rejects an error message after a timeout of
//500ms.
//o Call both promises separately and handle the resolved and reject
//results and then output to the console



// used the resolved promise function with a arrow function
const resolvedPromise = () => {

  //this function returns a promise that will resolve after 500ms which will then show a message that it had a 'delayed success'
  return new Promise((resolve) => {

    //sets the time to 500ms using the setTimeout function 
    setTimeout(() => {
      resolve({ message: 'delayed success!' });
    }, 500);
  });
};

// this code creates a rejectedpromise fuction which uses a arrow function
const rejectedPromise = () => {

  //it wil return a new promise and this time it will reject the promise 
  return new Promise((_, reject) => {

    //it will set the time to 500ms and after running this code will prompt a message saying this is a 'delayed expection!' . 
    setTimeout(() => {
      reject({ error: 'delayed exception!' });
    }, 500);
  });
};

//Note: I used the same message as the picture from the document which is why the output uses delayed
// Calls the resolved promise and shows the 'delayed success' or the ' delayed 
resolvedPromise()
  .then(result => console.log(result))
  .catch(error => console.error(error));

rejectedPromise()
  .then(result => console.log(result))
  .catch(error => console.error(error));
