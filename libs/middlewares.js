//this module is resposible for load the middlewares app

module.exports = app => {
    app.set("port",3000);
    //Configuring JSON tabulation
    app.set('json spaces',4);
    // app.use(express.urlencoded({extended:true}))
    // app.use(express.json())
    // app.use(expressValidator());

}