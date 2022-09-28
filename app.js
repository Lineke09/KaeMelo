const express = require('express');
const app = express();
const User = require(',/models/User');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => { 
    res.send("Hello, the back-end is working");
});

app.post("/register", async (req, res) => {
   // console.log(req.body);
    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            message: "Registered User!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            message: "[ERRO]: Unregistered User!"
        });
    });
    //res.send("Registered User!");

}); 

app.listen(8081, () => {
    console.log("Server started on port 8081: http://localhost:8081");
});