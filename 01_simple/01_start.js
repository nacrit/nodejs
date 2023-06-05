var http = require("http");


http.createServer(function(req, res) {
    // 响应信息头
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // 内容
    res.end('hello world!!');
}).listen(8888);

console.log('Server running at http://localhost:8888/')