var fs = require('fs')

var fileContents = fs.readFileSync('shopping-basket.json', 'utf-8')

//this will display it as a string
//console.log(fileContents)

//the .parse keyqord will analyze the code specifically so it prints an object and not a string of text
var data = JSON.parse(fileContents)



//cycles through data.basket
//assigns item.name to the first name attribute and prints it out
//everytime it loops it reassigns item.name to the next one in the class
for (var item of data.basket) {
    //change quantity of candles to 10
    if (item.name == 'Candles') {
        item.quantity = 10
    }
    console.log(item.quantity + "x " + item.name + " (£" + (item.price * item.quantity) + ")")
}

//print out grandTotal
var grandTotal = 0
for (var item of data.basket) {
    grandTotal += (item.price * item.quantity)
}
console.log("\nGrand Total: £" + grandTotal)


//convert data back into a string and create a new .json file with update data
data = JSON.stringify(data, null, 2)
fs.writeFileSync('new-basket.json', data, 'utf-8')
