//Question 3: File Module
//● Create a script that will do the following:
//1. Remove Log files
//o remove all the files from the Logs directory, if exists
//o output the file names to delete
//o remove the Logs directory

//imports file system and path module
const fs = require('fs');
const path = require('path');

//sets the directory path for the logs
const logDir = path.join(__dirname, 'Logs');

//it will check if the log files exsists 
if (fs.existsSync(logDir)) {


//then it will read all the files
  fs.readdirSync(logDir).forEach(file => {

    const filePath = path.join(logDir, file);

    //generates the full path
    console.log(`delete files...${file}`);

    //deleted the file using the fs.unlinkSync fu
    fs.unlinkSync(filePath);
  });
  
  //shows a message after all files deleted 
  fs.rmdirSync(logDir);
  console.log('Logs directory removed.');
} else {
  console.log('Logs directory does not exist.');
}
