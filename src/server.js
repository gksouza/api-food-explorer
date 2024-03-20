const express = require("express")
const migrationsRun = require("./database/sqlite/migrations");
const routes = require("./routes");

migrationsRun();

const app = express()
app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))