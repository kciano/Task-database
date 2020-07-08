const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const Webproject = require('./src/project-items.json')
const fs = require('fs');



let items = Webproject;

app.use(bodyParser());

app.get('/api', (req, res) => {
    
    res.send(JSON.stringify(Webproject))
})

// var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.post('/api/add-item', function (req, res) {
   

    var jsonParser = bodyParser.json()

    const addItem = req.body;
    const newItem = [...items, addItem];
    items = newItem;

    // newData.push(res.send(JSON.stringify(req.body)));
   
    
    let ItemString = JSON.stringify(items);

    

    fs.writeFile('./src/project-items.json', ItemString, (err) => {
        if (err) throw err;
       
    });
    console.log(`Post request received ${JSON.stringify(items)}`);
    res.send(items);
  })


  app.put('/api/update-item/:id', function (req, res) {
    const { id } = req.params;

    let item = items.filter(item => {
        return item.id == id;
    })[0];

    const index = items.indexOf(item);

    const keys = Object.keys(req.body);

    keys.forEach(key => {
        item[key] = req.body[key];
    });

    items[index] = item;

    res.send(`The item ${id} has been updated`);

    let ItemString = JSON.stringify(items);

    fs.writeFile('./src/project-items.json', ItemString, (err) => {
        if (err) throw err;
       
    });


});

  app.delete('/api/delete-item/:id', function (req, res) {
    // console.log(req.params.id);

    
    const { id } = req.params;

    let item = items.filter(item => {
        return item.id == id;
    })[0];

    const index = items.indexOf(item);

    items.splice(index, 1);

    res.send(`The item ${id} has been deleted`);

    let ItemString = JSON.stringify(items);

    fs.writeFile('./src/project-items.json', ItemString, (err) => {
        if (err) throw err;
       
    });

  })
app.listen(8080)