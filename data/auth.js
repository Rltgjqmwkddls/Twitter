let users = [
    {
        id: '1',
        username: 'apple',
        pasword: '$2b$10$ygz4H1Txcf0xlB3Nj7wdYOf2tkrs23CLo30y1l9EbdRJti8dl47Ya',
        name: '김사과',
        email: 'apple@apple.com',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSRyel4MCk8BAbI6gT_j4DBTEIcY0WW4WWfoklymsWA&s'
    },
    {
        id: '2',
        username: 'banana',
        pasword: '$2b$10$ygz4H1Txcf0xlB3Nj7wdYOf2tkrs23CLo30y1l9EbdRJti8dl47Ya',
        name: '반하나',
        email: 'banana@banana.com',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSRyel4MCk8BAbI6gT_j4DBTEIcY0WW4WWfoklymsWA&s' 
    }
]

// 아이디(username) 중복검사
export async function findByUsername(username){
    return users.find((user) => user.username === username)
}

// id 중복검사
export async function findById(id){
    return users.find((user) => user.id === id)
}

export async function createUser(user){
    const created = {id:'10', ...user}
    users.push(created)
    return created.id
}

export async function login(username){
    const user = users.find((user) => user.username === username) // 정보 찾기
    return user
}