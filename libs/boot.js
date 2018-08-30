//This module will listen the requests
module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log(`Ntask listening on port  + ${app.get('port')}`);
    });
};