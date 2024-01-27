const express = require("express");
const {connectMongoDb} = require("./connect");
const urlRoute = require("./Routes/url");
const URL = require("./models/url");
const app = express();
const PORT = 8001;

connectMongoDb();
app.use(express.json());

app.use("/url",urlRoute);
app.get('/:shortId',async (req,res)=> {
    const shortId = req.params.shortId;
const entry = await URL.findOneAndUpdate({
        shortId
    },{
        $push: {
            visitHistory: {
                timestamp: Date.now()
            },
        }
    });
    res.redirect(entry.redirectURL);
});



app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));