// This Module is responsible to handle the route of tasks
module.exports = app => {
    const Tasks = app.db.models.Tasks;
    app.route("/tasks")
        .all((req, res) => {
            //Middleware to pre execution of routes
        })
        
        .get((req, res) => {
            // "/tasks" : Task listing
            Tasks.findAll({}).then(tasks => {
                res.json({tasks: tasks});
            });
        })

        .post((req,res) => {
            // "/tasks": add a new task

        });
    
    app.route ("/tasks/:id")
        .all((req,res) => {
            // Middleware to pre execution of routes
        })

        .get((req,res) => {
            //"tasks/1": update specific task 
        })

        .delete((req,res) => {
            //"tasks/1": delete a specific task
        });
};