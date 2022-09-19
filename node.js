// let minh = "minh";
// console.log("minh la "+ minh);
//
// let point = 9;
// if (point >= 9 && point < 10) {
//     console.log("D");
// } else if (point < 8 && point > 5) {
//     console.log("p");
// } else {
//     console.log("fail")
// }
//khai bao module http de tao web server
const http= require('http')
// khai bao local server
const host = 'localhost'//127.0.0.1
//khai bao server port
const port = 3000
// tao server
const server = http.createServer((require, respond) => {
    respond.end("hello , welcome to my home")
})
// chay server
server.listen(port, () =>
    {
        console.log('server is running at http://' + host + ":" + port)
    }
)

//C2//
// const http= require('http')
// const server = http.createServer((require, respond) => {
//     respond.end("hello , welcome to my home")
// }).listen(3000)