const express = require('express'),
      db_name = "Shindigs",
         port = 8000,
          app = express();

app.use(express.static(__dirname + "/client/dist/client"));
app.use(express.json());

require('./server/utils/mongoose')(db_name);
require('./server/utils/routes')(app);

app.all('*', (req, res, next) => {
    res.sendFile(__dirname + "/client/dist/client/index.html");
});

app.listen(port, () => console.log(`Listening on port ${port}`));