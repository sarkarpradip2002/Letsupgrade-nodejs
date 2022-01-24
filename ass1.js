const express=require('express')
const morgan=require('morgan');
const app=express();

app.use(express.json());
app.use(morgan('dev'));
app.use((req,res,next)=>{
    req.currentdate=new Date();
    next();
})

app.post('/',(req,res)=>{
    console.log(req.currentdate);
    res.send(req.body);
})

app.listen(5000,()=>{
    console.log("server starts");
})
