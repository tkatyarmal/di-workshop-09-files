//to include the File System module, use the require(method)
var fs = require('fs')

var fileContents = fs.readFileSync('names.txt', 'utf-8')

var contentsArray = fileContents.split('\n')    //the fileContents string is split into an array
contentsArray = contentsArray.reverse()         //the elements in the array are reversed
contentsArray = contentsArray.join('\n')        //the array is converted into string with the '\n' 

console.log(contentsArray)



var arrayOfNames = fileContents.split('\n')
//this for loop is a specilised version of a foor loop
//it assigns the 0th element in the array to a variable (which we called name)
//everytime it loops it reassigns the variable to the next element in the array
for (var name of arrayOfNames) {
    console.log(name)
}


//the .writeFileSync method writes the contentsArray in a new txt file everytime it runs
fs.writeFileSync('names_reversed.txt', contentsArray, 'utf-8')