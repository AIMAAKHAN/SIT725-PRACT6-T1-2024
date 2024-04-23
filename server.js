const express=require("express");
const app =express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const mycontroller=require('./Controller/controller');



app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost:27017/hotelsystem')
const notesSchema={
    firstName:String,
    email:String,
    message:String

}
app.get('/SumofTwoNumbers/:Number1/:Number2', function(req,res,next){
    var Number1 = parseInt(req.params.firstNumber) 
    var Number2 = parseInt(req.params.secondNumber)
    var Sum = Number1 + Number2 || null
    if(Sum == null) {
      res.json({Sum: Sum, statusCode: 400}).status(400)
    }
    else { res.json({Sum: Sum, statusCode: 200}).status(200) } 
  })
app.use('/form',mycontroller);
const Note =mongoose.model("Note",notesSchema);
app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
})
app.post("/",function(req,res){
    let newNote=new Note({
        fisrtName:req.body.firstName,
        email:req.body.email,
        message:req.body.message
    });
    newNote.save();
    res.redirect('/');
})
app.listen(5500,function(){
    console.log("server is running on 5500");
})