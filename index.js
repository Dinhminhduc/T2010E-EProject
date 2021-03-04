const express = require("express");
const app = express();// xay nha
const port = process.env.PORT || 5000; // khai bao cong vao
app.listen(port,function () { // hoan thanh xay nha
    console.log("Server is running..");
});
app.use(express.static("public"));// cac file css,image,.. phai dat trong public
app.set("view engine","ejs");
// tao routing ( thue 1 nhan vien)
app.get("/",function (req,res) {
    res.sendFile(__dirname+"/public/Session6_layout.html");
})
// them 1 routing
app.get("/bongda",function (req,res) {
    var d = {
        message:"success",
        data: [
            {
                id:1,
                name:"haha"
            },
            {
                id:2,
                name:"hihi"
            }
        ]
    }
    res.send(d);
})
// trang quan ao
app.get("/quan-ao",function (req,res) {
    res.sendFile(__dirname+"/public/Session7_bootstrap.html");
})
var count =0;
app.get("/dem-so-nguoi",function(req,res){
    res.render("demo")
});
app.get("/test",function (req,res){
    res.render("Home")
});
app.get("/shop",function (req,res){
    res.render("Shop")
});
app.get("/cart",function (req,res){
    res.render("shoppingcart")
});
app.get("/head",function (req,res){
    res.render("header")
});
app.get("/check",function (req,res){
    res.render("checkout")
});
app.get("/contact",function (req,res){
    res.render("contact")
});
app.get("/checkout",function (req,res){
    res.render("checkout")
})
app.get("/contactus",function (req,res){
    res.render("contact")
})
app.get("/login",function (req,res){
    res.render("login")
})
app.get("/shoppingcart",function (req,res){
    res.render("shoppingcart")
})
