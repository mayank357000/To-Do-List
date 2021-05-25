const express= require("express");
const bodyParser= require("body-parser");
const date= require(__dirname+"/date.js")
 // var item="";//ek variable main value dalne se har baar list file ek hi ele change hoga
 //add nhi hoga so we use a array
 const items=["Buy Food","Cook Food","Eat Food"];
 const workItems=[];
const app = express();
app.use(bodyParser.urlencoded({extended:true}));//this thing below app declaration
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/",function(req,res){

 let day=date.getDate();
 res.render("list",{listTitle : day, AddedItems:items});
});

app.post("/",function(req,res){
  var item = req.body.newItem;
  if(req.body.list==="Work List")
  {

    workItems.push(item);
    res.redirect("/work");
  }
  items.push(item);
  res.redirect("/");
  // console.log(item);//on our hyper terminal we can see it
});

app.get("/work",function(req,res){
  res.render("list",{listTitle : "Work List",AddedItems:workItems})
});


app.listen(3000,function(){
  console.log("Server has started runnnin on port 3000");
});
