// This Module is responsible to handle the route of tasks
module.exports = app => {
    const Tasks = app.db.models.tasks;
    app.get("/tasks", function (req, res) {
        Tasks.findAll({}).then(results => {
            res.json({tasks: results});
        });
    });
};