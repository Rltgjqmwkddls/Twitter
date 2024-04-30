import express from "express"
import morgan from "morgan"
import tweetsRouter from './router/tweets.js'
import authRouter from './router/auth.js'

const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.use('/twwets', tweetsRouter)
app.use('/auth', authRouter)

app.use((req, res, next) => {
    res.status(404)
});

app.listen(8080)

