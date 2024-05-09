import MongoDB from 'mongodb'
import { sequelize } from '../db/database.js'

const ObjectID = MongoDB.ObjectId

// 아이디 (uername) 중복검사
export async function findByUsername(username){
    return getUsers().find({username}).next().then(mapOptionalUser)
}

// id 중복검사
export async function findById(id){
    return getUsers().find({_id: new ObjectID(id)}).next().then(mapOptionalUser)
}

// 회원가입
export async function createUser(user){
    return getUsers().insertOne(user).then((result) => console.log(result.insertId.toString()))
}

// export async function login(username){
//     return getUsers.find((users) => users.username === username)
// }

function mapOptionalUser(user){
    return user ? { ...user, id:user._id.inString()} : user
}