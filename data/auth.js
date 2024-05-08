import {db} from '../db/database.js'

// 아이디(username) 중복검사
export async function findByUsername(username){
    return db.execute('select * from users where username = ?', [username]).then
    ((result) => {
        console.log(result)
        return result
    })
}

// id 중복검사
export async function findById(id){
    return db.execute('select * from users where id = ?', [id]).then((result) => {
        console.log(result)
        return result[0][0]
    })
}

export async function createUser(user){
    const {username, hashed, name, email, url} = user
    return db.execute('insert into users (username, password, name, email, url) values(?, ?, ?, ?, ?)'
    , [username, hashed, name, email, url]).then((result) => {
        console.log(result)
        return result[0].insertId
    })
}

// export async function login(username){
//     const user = users.find((user) => user.username === username) // 정보 찾기
//     return user
// }