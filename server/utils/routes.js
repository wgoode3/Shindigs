const Partys = require('../controllers/partys');

module.exports = function(app) {
    app.get("/parties", Partys.getAll);
    app.get("/parties/:_id", Partys.getOne);
    app.post("/parties", Partys.create);
    app.put("/parties/:_id", Partys.rsvp);
    app.delete("/parties/:_id", Partys.delete);
}