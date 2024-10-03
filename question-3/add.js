//Question 3: File Module
//● Create a script that will do the following:
//Create Log files
//o create a Logs directory, if it does not exist
//o change the current process to the new Logs directory
//o create 10 log files and write some text into the file
//o output the files names to console


//imports file system and path module
const fs = require('fs');
const path = require('path');

//sets the directory path for the logs
const logDir = path.join(__dirname, 'Logs');

//it will check if the log files exsists 

if (!fs.existsSync(logDir)) {
  
//then we create it using mkdirSync
  fs.mkdirSync(logDir);
}
process.chdir(logDir);

//creates 10 files inside the log directory
for (let i = 0; i < 10; i++) {

//defines the name of each log file
  const fileName = `log${i}.txt`;

  //this will generate the log file text like this 'log0.txt'
  fs.writeFileSync(fileName, `Log file ${i}`);

  //shows the filename 
  console.log(fileName);
}
