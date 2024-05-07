import express from "express" // Express 웹 프레임워크를 사용하여 간단한 웹 서버를 설정
import morgan from "morgan" // HTTP 요청 로거 미들웨어 -> 요청에 대한 정보를 콘솔에 기록
import tweetsRouter from '/router/tweets.js'

const app = express()

app.use(express.json()) // 내장 미들웨어 -> 요청의 본문을 JSON으로 파싱(POST와PUT요청에서 데이터를 쉽게 처리)
app.use(morgan("dev")) //  Mogan 미들웨어를 dev모드로 설정 -> 개발 중 요청에 대한 간결한 정보를 로그로 출력

app.use('/twwets', tweetsRouter)

app.use((req, res, next) => {
    res.status(404)
})

app.listen(8080)

