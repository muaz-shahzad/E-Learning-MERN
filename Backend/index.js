import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/elearndb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)


//admin

const adminSchema = new mongoose.Schema({
    email1: String,
    password1: String
})
const Adminn = new mongoose.model("Adminn", adminSchema)


//Routes
// app.get("/", (req, res) => {
//     res.send("MY API Register")
// })


app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 


app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
})

// admin

app.post("/admin", (req, res)=> {
    const { email, password} = req.body
    Adminn.findOne({ email1: email}, (err, adminn) => {
        if(adminn){
            if(password === Adminn.password ) {
                res.send({message: "Admin Login Successfull", adminn: Adminn})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "Admin Not Recognized"})
        }
    })
}) 



app.listen(9002, () => {
    console.log("BE started at port 9002")
})
