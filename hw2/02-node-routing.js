// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format
const http = require("http");
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <html>
        <body>
          <h1>Exercise-02</h1>
          <p>Click on the links below to visit other pages:</p>
          <ul>
            <li><a href="/welcome">Welcome Page</a></li>
            <li><a href="/redirect">Redirect Page</a></li>
            <li><a href="/cache">Cache Page</a></li>
            <li><a href="/cookie">Cookie Page</a></li>
          </ul>
        </body>
      </html>
    `);
    res.end();
  } else if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Node Routing Excerise </h1>");
    res.end();
  } else if (req.url === "/redirect") {
    res.writeHead(302, { location: "/redirected" });
    res.end();
  } else if (req.url === "/redirected") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>redirected to this page....</h1>");
    res.end();
  } else if (req.url === "/cache") {
    res.setHeader("Cache-Control", "max-age = 86400");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>This Resource was cached</h2>");
    res.end();
  } else if (req.url === "/cookie") {
    res.setHeader("Set-Cookie", "hello=world");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Cookies....Yummm");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404-Page not found</h1>");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
