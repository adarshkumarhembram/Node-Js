import http from "http";
import { generateLovePercents } from "./feature.js";



const server=http.createServer((req,res)=>{
    // res.end("hello world!");
    if (req.url == "/love"){
        res.end(`love is ${generateLovePercents()}`);
    }

    else if (req.url == "/"){
        res.end("<h1>home page</h1>");
    }
    else if (req.url == "/contact"){
        res.end("<h1>contact page</h1>");
    }
    else{
        res.end("<h1>404 page not found</h1>");
    }
})

server.listen(3000,()=>{
    console.log("server is listening");
})