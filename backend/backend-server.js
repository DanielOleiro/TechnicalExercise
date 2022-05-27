const PORT= 8888;
const express=require("express")
const cors = require("cors")
const app= express()

const backendAPI=require("./backend-api.js")(express.Router())

app.use(express.json())

app.use(cors())
app.use("/",backendAPI)
app.listen(PORT)