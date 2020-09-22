const express = require("express");
const app = express();
app.use(express.static(__dirname + "/html/"));

app.get("/1",(req,res)=>{
    res.send("OK");
})
app.listen("3000", () => {
    console.log("服务已经开启")
})