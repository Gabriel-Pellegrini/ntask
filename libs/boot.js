//This module will listen the requests
module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => {
            console.log(`Ntask listening on port  + ${app.get('port')}`);
        });
    });
};