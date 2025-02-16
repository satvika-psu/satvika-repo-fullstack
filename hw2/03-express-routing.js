// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

const routes = [
  "welcome",
  "redirect",
  "redirected",
  "cache",
  "cookie",
  "other",
];

app.get("/", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send(`
    <h1>Ex- 03-Express Routing Exercise</h1>
    <ul>
      <li><a href="/welcome">Welcome</a></li>
      <li><a href="/redirect">Redirect</a></li>
      <li><a href="/cache">Cache</a></li>
      <li><a href="/cookie">Cookie</a></li>
      <li><a href="/other">Other</a></li>
    </ul>
  `);
});

// Add your code here
app.get("/welcome", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send("<h1>Welcome to Express Routing Excerise </h1>");
});

app.get("/redirect", (req, res) => {
  res.redirect("/redirected", 302);
});

app.get("/redirected", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send("<h1>Redirected to this page</h1>");
});

app.get("/cache", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html", "Cache-Control": "max-age=86400" });
  res.send("<h1>This resource was cached for 1 day</h1>");
});

app.get("/cookie", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/plain", "Set-Cookie": "hello=world" });
  res.send("cookies… yummm");
});

app.get("/*", (req, res) => {
  res.status(404);
  res.set({ "Content-Type": "text/html" });
  res.send("<h1>404 - Page Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
