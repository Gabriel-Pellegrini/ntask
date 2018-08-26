
module.exports = app => {
    app.get("/", (req, res) => {
        res.json({
            Status: "Ntask API Ok"
        });
    });
};
