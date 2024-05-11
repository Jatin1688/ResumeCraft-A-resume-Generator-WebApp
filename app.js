const express = require('express')
const app = express()
const port = 3000


const route = require('./Routes/web.js')
const connectdb=require('./db/connectdb.js')
// const connectdb= require('./db/connectdb.js')


// app.get('/', function (req, res) {
//       res.send({ title: 'GeeksforGeeks' });
//   });


const fileUpload = require("express-fileupload"); 

//Temp file uploader
app.use(fileUpload({useTempFiles: true}));
// to encode

app.use(express.urlencoded({extended:true}));
const cookieparser=require('cookie-parser')
app.use(cookieparser())
// connectdb
connectdb()

// session
const session = require('express-session')

// connect-flash
const flash = require('connect-flash');



// session
app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
}));










app.use(flash());

// set ejs
app.set('view engine','ejs');


// expess static
app.use(express.static('public'));


app.use('/',route)
app.listen(port, () => {
      console.log(`server start on  on port localhost: ${port}`)
    // template string format to write string
    })