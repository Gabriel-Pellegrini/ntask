const express = require('express');
const app = express();
const port = 3000; 

//Configuring JSON tabulation
app.set('json spaces',4);

app.get("/",function (req,res)  {
    res.json({Status:"Ntask API Ok"})
});

app.get("/tasks",function (req,res)  {
    res.json({
        tasks:[
            {"title":"Fazer Compras"},
            {title:"estudar JS"},
            {"title":"Comprar Livro"}
        ]
    });
});

app.listen(port,function () {
 console.log("Ntask listening on port " + port);
})
