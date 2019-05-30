

/**
   1, npm install mongoose -D
   2, 在nodejs 创建一个对象

 */
//1. 引于mongoose 连接器 driver
const mongoose = require("mongoose")

// 2 . mongoose connect 请求连接
mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true})

//3. 监听connect是否连接成功
mongoose.connection.on("connected",()=>{
    console.log("node connect mongodb success!")
})

//4. 对test数据库中的集合操作 collection -> CURD
// 确定需要操作的集合名称 users
// 在nodejs中创建一个js对象，这个对象的结构和 集合users的结构是完全一样

// schema 什么是schema 确定users collection的schema
// schema - db schema -> users schema

//获取连接成功的数据据的schema test
const Schema = mongoose.Schema; //db schema

//创建一个users的集合的schema
const userSchema = new Schema({
    name:{type:String},
    age:{type:Number},
    sex:{type:String},
    hobby:{type:Array},
    addr:{type:Object}
})

//6.在userSchema 和 users的集合上建立mapping
const usersModel = mongoose.model("users",userSchema)


//7. 对usersModel进行CURD  find delete remove  mybatis
//db.users.find socket
// usersModel.find({},(err,results)=>{
//     console.log(results)
// })

//添加操作
let users = new usersModel({
     name:"wangwu",
     age:20,
     sex:"male",
     hobby:["node"],
     addr:{pro:"xinjiang",city:"kashi"}
})

// users.save()

// usersModel.insertMany([
//     {name:"zhaoliu"},
//     {name:"qianqi"}
// ],(err,result)=>{
//     console.log(err)
// })


// usersModel.deleteOne({"name":"zhaoliu"},(error,result)=>{
//     console.log(result)
// })

usersModel.updateOne({name:"lisi"},{$set:{sex:"male"}},(err,result)=>{
   console.log(result)
})
