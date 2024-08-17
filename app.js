const express = require('express');
const path = require('path');
const app = express();

const staticPath = path.join(__dirname, "\public");
app.use(express.static(staticPath));


app.get("/", (req, res)=>{
    
});

app.use((req, res) => {
    res.status(404);
    res.send(`<h1>Error 404: Page Not Found</h1>`);
});

app.listen(3000, ()=>{
    console.log("App listening on port 3000");
});