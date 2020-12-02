

var express = require('express')
var bodyParser = require('body-parser')
var app = express()
//var http = require('http').server(app)
//var io = require('socket.io')(http)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname))

var messages = [{
    name:'["kannan"]'
}]

app.get('/getresult', (req, res) => {
    res.send(messages)
})

app.post('/postresult', (req, res) => {
    console.log(req.body)
    var userinput = req.body.name
    let arr = userinput.split(',');   
    var array =[]; 

    for (var i of arr) {               
        if (typeof i === 'string')      
            array.push('Invalid Item')
        if (i % 3 == 0 && i % 5 == 0)
             
        array.push('FizzBuzz')
        else if (i % 3 == 0)          
        array.push('Fizz')
        else if (i % 5 == 0)          
        array.push('Buzz')
        else
            array.push('Divided ' + i + ' By 3')
        array.push('Divided ' + i + ' By 5')               
          
    }
    console.log(array);
    array = JSON.stringify(array);
    messages.push(array)
    res.sendStatus(200) 
  
})


var server = app.listen(3000, () => {
    console.log('server is running on port ', server.address().port)
});