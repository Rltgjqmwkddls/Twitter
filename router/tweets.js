import express from "express"

const router = express.Router()

let tweets = [
    {
        id: '1',
        text: '안녕하세요',
        createdAt: Date.now().toString(),
        name: '김사과',
        username: 'apple',
        url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MDVfMjc2%2FMDAxNTIyOTMwMjI2MDgw.ozCD0yIHH74fspbyayIr3Uf0XtgdVa1sPoL4AGMZW1sg.reQF_ygDQs13dtK-5lr6a7omXxvpmZmfeXDhdfbG5_kg.PNG.hanjjj1%2F%25BB%25E7%25B0%25FA-s1.png&type=a340'
    },
    {
        id: '2',
        text: '안녕하세요',
        createdAt: Date.now().toString(),
        name: '반하나',
        username: 'banana',
        url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMThfMTE0%2FMDAxNzA4MTg4MDI2NTI1.eO31tRVUk3LHehk4k0KVuqLdzLbDhxpaYvqbOIm5Bvkg.PLl7wRwWUGCABhtcrs2rtmIQowDz6yFmppjsXkLpc6Ag.JPEG.yangseongjunna%2FDALL%25A1%25A4E_2024-02-18_01.40.21_-_Create_a_photorealistic_illustration_of_three_b.jpg&type=sc960_832'
    }
]

// 해당 아이디에 대한 트윗글 가져오기
// GET
// http://localhost:8080/tweets?username=:username
router.get('/', (req, res, next) => {
    const username = req.query.username
    const data = username 
        ? tweets.filter((tweets) => tweets.username == username)
        : tweets
    res.status(200).json(data)
})


// 글 번호에 대한 트윗 가져오기
// GET
// http://localhost:8080/tweets/:id
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet){
        res.status(200).json(tweet)
    }else{
        res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
})

// 트윗하기
// POST
// http://localhost:8080/tweets
 router.post('/', (req, res, next) => {
    const {text, name, username} = req.body
    const tweet = {
        id: '10',
        text: text,
        createdAt: Date.now().toString(),
        name: name,
        username: username,
        url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MDVfMjc2%2FMDAxNTIyOTMwMjI2MDgw.ozCD0yIHH74fspbyayIr3Uf0XtgdVa1sPoL4AGMZW1sg.reQF_ygDQs13dtK-5lr6a7omXxvpmZmfeXDhdfbG5_kg.PNG.hanjjj1%2F%25BB%25E7%25B0%25FA-s1.png&type=a340"
    }
    tweets = [tweets, tweets]
    res.status(201).json(tweets)
 })


/*
    name, username, text
    json형태로 입력 후 추가된 데이터까지 모두 json으로 출력
*/


// 트윗 수정하기
// PUT
// http://localhost:8080/tweets/:id
// id, username, text
// json형태로 입력 후 변경된 데이터까지 모두 json으로 출력
router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const text = req.body.text
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet){
        res.status(201).json(tweet)
    }else{
        res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
})

// 트윗 삭제하기
// DELETE
// http://localhost:8080/tweets/:id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    tweets =tweets.filter((tweet) => tweet.id !== id)
    res.sendStatus(204)
})


export default router