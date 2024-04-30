let users = [
    {
        id: '1',
        username: 'apple',
        pasword: '$2b$10$ygz4H1Txcf0xlB3Nj7wdYOf2tkrs23CLo30y1l9EbdRJti8dl47Ya',
        name: '김사과',
        email: 'apple@apple.com',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSRyel4MCk8BAbI6gT_j4DBTEIcY0WW4WWfoklymsWA&s'
    }, 
]

export async function createUser(username, password, name, email){
    const user = {
        id: '10',
        username,
        password,
        name,
        email,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSRyel4MCk8BAbI6gT_j4DBTEIcY0WW4WWfoklymsWA&s'
    }
    users = [user, ...users]
    return users
}

export async function login(username){
    const user = users.find((user) => user.username === username) // 정보 찾기
    return user
}