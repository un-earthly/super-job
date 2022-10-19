const express = require("express")
const app = express()
const cors = require("cors")
const landingRoute = require("./routes/landing.route.js")
const jobRoutes = require("./routes/job.route.js")
const authRoutes = require("./routes/auth.route.js")
const adminRoutes = require("./routes/admin.route.js")
const managerRoutes = require("./routes/manager.route.js")
const { connectToDb } = require("./database.js")

require("dotenv").config()

// external middlewares
app.use(cors())
app.use(express.json())

// route definations

app.get("/", landingRoute)
app.use("/api/jobs", jobRoutes)
app.use("/api/manager/jobs", managerRoutes)
app.use("/api/user", authRoutes)
app.use("/api/admin", adminRoutes)


// dbconncention

connectToDb()

// server kickstart

app.listen(process.env.PORT)