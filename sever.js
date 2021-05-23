const express = require('express');

const log = console.log;
const app = express();
const path = required('path');
const PORT = 8080;

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(PORT, () => log('Server is starting on PORT,', 8080));