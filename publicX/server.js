var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response){
    console.log("user requested profile");
}
function forum(request, response){
    console.log("user requested forum");
}

app.use('/profile', profile);
app.use('/forum', forum);

//function doFirst(request, response, next){
//    console.log("bacon");
//    //next();
//}
//function doSecond(request, response, next){
//    console.log("tuna");
//    next();
//}
//
//app.use(doFirst);
//app.use(doSecond);

http.createServer(app).listen(8080);
console.log("server is running...");