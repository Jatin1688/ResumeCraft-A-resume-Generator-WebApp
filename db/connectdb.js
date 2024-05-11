const mongoose= require('mongoose')
const live_url = 'mongodb+srv://jatinshakya811:kohli12345@cluster0.nr6jwok.mongodb.net/Resume_Generator?retryWrites=true&w=majority&appName=Cluster0'

const local_url="mongodb://0.0.0.0:27017/Resume_Generator"

const connectdb=()=>{
    return mongoose.connect(live_url)
    .then(()=>{
        console.log("Connected Succeessfully")
    })
    .catch((err)=>{
        console.log(err)
    })

}
module.exports=connectdb