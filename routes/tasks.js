// This Module is responsible to handle the route of tasks
module.exports = app => {
    const Tasks = app.db.models.Tasks;
    app.get("/tasks", (req, res) => {
        Tasks.findAll({}).then(tasks => {
            res.json({ tasks: tasks});
        });
    });
};