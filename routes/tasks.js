// This Module is responsible to handle the route of tasks
module.exports = app => {
    const Tasks = app.db.models.Tasks;
    app.route("/tasks")
        .all((req, res,next) => {
            //Middleware to pre execution of routes
            delete req.body.id
            next();
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
            delete req.body.id
            next();
        })

        .get((req,res) => {
            //"tasks/1": update specific task 
            Tasks.findAll({})
                .then(results => res.json(results))
                .catch(error => {
                    res.status(412).json({msg:error.message});
                    });
                })

        .delete((req,res) => {
            //"tasks/1": delete a specific task
        });
};