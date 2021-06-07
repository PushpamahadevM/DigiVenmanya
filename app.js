const express = require('express');
const { use } = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const User = require('./models/user');
const User1 = require('./models/user1');
const Design = require('./models/design');




 //express app
const app = express();
const dbURI = 'mongodb+srv://DigiVenmanya:dvadmin@123@dv-website.yag9f.mongodb.net/dv-website?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(process.env.PORT || 3000))
.catch((err) => console.log(err));
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

var storage = multer.diskStorage({
   destination:function(req,file,cb){
    cb(null,'public/uploads/uploadedimages')
},
filename:function(req,file,cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
}
})

var upload = multer({
    storage:storage
})



//listen for requestsv



app.get('/index.html', (req, res)=> {
    //res.send('Hello World');
    res.sendFile('./htmlfiles/index.html', { root: __dirname});
});
app.get('/aboutus.html', (req, res)=> {
    //res.send('Hello World');
    res.sendFile('./htmlfiles/aboutus.html', { root: __dirname});
});
app.get('/coursedetails.html', (req, res)=> {
    //res.send('Hello World');
    res.sendFile('./htmlfiles/coursedetails.html', { root: __dirname});
});

app.get('/achievements.html', (req, res)=> {
    //res.send('Hello World');
    res.sendFile('./htmlfiles/achievements.html', { root: __dirname});
});

app.get('/enquiry.html', (req, res)=> {
    //res.send('Hello World');
    res.sendFile('./htmlfiles/enquiry.html', { root: __dirname});
});

app.get('/signup.html', (req, res)=> {
    //res.send('Hello World');
    res.sendFile('./htmlfiles/signup.html', { root: __dirname});
});
app.get('/login.html', (req, res)=> {
    //res.send('Hello World');
    res.sendFile('./htmlfiles/login.html', { root: __dirname});
});

app.get('/upload.html', (req, res)=> {
    //res.send('Hello World');
    res.sendFile('./htmlfiles/upload.html', { root: __dirname});
});

app.post('/users',(req,res)=>{
    const user= new User(req.body);
    user.save()
    .then((result)=>{
        res.redirect('/index.html');
       
            })
        .catch((err)=>{
        console.log(err);
        })
    })

app.post('/users1',(req,res)=>{
        const user1= new User1(req.body);
        user1.save()
        .then((result)=>{
            res.redirect('/upload.html');
                })
            .catch((err)=>{
            console.log(err);
            })
        })

app.post('/designs',upload.single('img'),(req,res)=>{
            const fullpath= "uploads/"+req.file.filename;
            const document= {
                username1:req.body.username1,
                path:fullpath
                
            }
            const design= new Design(document);
            design.save()
            .then((result)=>{
                res.redirect('/index.html');
                    })
                .catch((err)=>{
                console.log(err);
                })
            })
            