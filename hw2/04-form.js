// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>EX-04:Form</h1>
        <p>Click the button below to go to the form page:</p>
        <button onclick="window.location.href='/form'">Go to Form</button>
      </body>
    </html>
  `);
});

// Form page route
app.get("/form", (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br>
        <br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br>
        <br>

        <label for="comments">Comments:</label><br>
        <textarea id="comments" name="comments"></textarea><br>
        <br>

        <label for="newsletter">Newsletter:</label><br>
        <br>
        <input type="radio" id="newsletterYes" name="newsletter" value="Yes, sign me up for the newsletter">Yes, sign me up for the newsletter"<br>
        <br>
        <input type="radio" id="newsletterNo" name="newsletter" value="No, Thank you">No, Thank you<br>
        <br>

        <input type="submit" value="Submit">
    </form>
  `);
});

// Handle form submission and return data with labels
app.post("/submit", (req, res) => {
  // Display the submitted data with labels
  res.send(`
    <html>
      <body>
        <p>Name:${req.body.username}</p>
        <p>Email: ${req.body.email}</p>
        <p>Comments: ${req.body.comments}</p>
        <p>Newsletter: ${
          req.body.newsletter ? req.body.newsletter : "Not selected any option"
        }</p>
        <br>
        </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
