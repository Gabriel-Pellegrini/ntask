module.exports = app => {
    app.get("/tasks", function (req, res) {
        res.json({
            tasks: [{
                    "title": "Fazer Compras"
                },
                {
                    title: "estudar JS"
                },
                {
                    "title": "Comprar Livro"
                }
            ]
        });
    });
}