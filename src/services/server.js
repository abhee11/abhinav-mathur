let express =  require('express');

let app = express();

let port = process.env.PORT || 3030;

app.get("/my-new-api", (req, res) => {
    res.send("Hello and congrasts on your first express API ");
})

app.listen(port, () => console.log(`Runnin on port ${port}`));