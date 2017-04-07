var app = require('../server.js');

app.post("/api/visitors", function (request, response) {
    var userName = request.body.name;
    response.send("Hello " + userName + "!");
    return;
}