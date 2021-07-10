// 参考
// 試しにHeaderにCORS設定してみるとか
// https://qiita.com/tomoyukilabs/items/81698edd5812ff6acb34

var http = require("http");
// bodyを解析するにはbody-parserをインクルードしてjson解析用のメソッドをしないといけないらしい
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

// var express = require("express");
// var app = express();
const express = require("express");
const app = express();

// app.get("/", function (req, res) {
//   res.write("Hello World!..."); //write a response to the client
//   res.end(); //end the response
// });

app.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "https://r9bkv.csb.app"); //
  res.header("Access-Control-Allow-Methods", "GET");
  res.write("Hello World!.wwwww"); //write a response to the client
  // res.write(req);
  res.end(); //end the response

  console.log("set up..");
  // console.log(req);
});
app.get("/aaa", function (req, res) {
  res.write("Hello World!.2222"); //write a response to the client
  res.end(); //end the response
});

app.post("/post_test", jsonParser, function (req, res) {
  res.header("Access-Control-Allow-Origin", "https://r9bkv.csb.app"); //
  res.header("Access-Control-Allow-Methods", "POST");
  res.header("Access-Control-Allow-Headers", "Origin,Content-Type");
  // res.header("", "Content-Type");
  bodyParser.json({ extended: true }); // for parsing application/x-www-form-urlencoded

  console.log("post complite");
  console.log(req.body);

  res.write("Hello World!.post");
  // res.write(req);
  // res.send("post complite");
  res.end();
});

// app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "https://r9bkv.csb.app"); //
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.header("Access-Control-Allow-Headers", "Origin,Content-Type");

  res.write("Hello World!.wwwww"); //write a response to the client
  // res.write(req);
  // bodyParser.json;
  bodyParser.json({ extended: true }); // for parsing application/x-www-form-urlencoded

  res.end(); //end the response

  console.log("set up..");
});

app.listen(8080, function () {
  console.log("server running on 8080");
}); //the server object listßens on port 8080

//create a server object:
// http
//   .createServer(function (req, res) {
//     res.write("Hello World! testtest"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080, () => {
//     console.log(app);
//   }); //the server object listens on port 8080
