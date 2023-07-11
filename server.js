// const http = require('http')

// const option = {
    // hostname: 'fakestoreapi.com',
//     path: '/products/2',
//     method: 'GET'
// }

// const apiReq = http.request(option,(apiRes)=>{
//     apiRes.on("data",(data)=>{
//         console.log(data.toString())
//     })
// })
// apiReq.on("error",(e)=>{
//     console.log(e)
// })
// apiReq.end()


const http = require('http')
const { hostname } = require('os')

const port = 3001
const apiData = {
    hostname:'fakestoreapi.com',
    path:'/products/1',
    method: 'GET'
}
let server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.statusCode=200
        res.setHeader('Content-Type','text/plain')
        res.end("Welcome to men and women dummy data")
    }
    else if(req.url=='/men'){
        res.statusCode=200
        res.setHeader('Content-Type','text/plain')
        const apiReq = http.request(apiData,(apiRes)=>{
            apiRes.on("data",(data)=>{
                res.statusCode=200
                res.setHeader('Content-Type','application/json')
                res.end(data.toString())
            })
        })
        apiReq.on("error",(e)=>{
            console.log(e)
        })
        apiReq.end()
    }
    else if(req.url=='/women'){
        res.statusCode=200
        res.setHeader('Content-Type','text/plain')
        const apiReq = http.request(apiData,(apiRes)=>{
            apiRes.on("data",(data)=>{
                res.statusCode=200
                res.setHeader('Content-Type','application/json')
                res.end(data.toString())
            })
        })
        apiReq.on("error",(e)=>{
            console.log(e)
        })
        apiReq.end()
    }
    else if(req.url=='/other'){
        res.statusCode=200
        res.setHeader('Content-Type','text/plain')
        const apiReq = http.request(apiData,(apiRes)=>{
            apiRes.on("data",(data)=>{
                res.statusCode=200
                res.setHeader('Content-Type','application/json')
                res.end(data.toString())
            })
        })
        apiReq.on("error",(e)=>{
            console.log(e)
        })
        apiReq.end()
    }
    if(req.url=='/product'){
        
        
        apiReq.on("error",(e)=>{
            console.log(e)
        })
        apiReq.end()
    }




})

server.listen(port,()=>{
    console.log(`server running successfully at ${port} and ${hostname}`)
})