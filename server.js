const axios = require('axios').default;
const express = require("express");
const ejs = require ("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine" , "ejs");


app.get("/",function(req, res){
  axios.get('https://api.wazirx.com/api/v2/tickers')
    .then(function (response) {

      res.render("content", {response: response});
    });

})


let port = process.env.PORT;
if(port ==null || port== ""){
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started on port 3000");
});
