const express = require("express");
const app = express();
const port = 5000;
const path = require("path");



app.use(express.static("static"));
// app.[method]([route], [route handler])

app.get("/", (req, res) => {
	// sending back an HTML file that a broswer can render on the screen.
	res.sendFile(path.resolve("pages/index.html"));
});

// creates and starts a server for our API on a defined port
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
})

// Return search hit given :hit  URL route parameters
app.get("/search-hit/:hit", (req, res) => {
// sending back an HTML file that a browser can render on the screen.
  res.sendFile(path.resolve(`pages/search-hit-${req.params.hit}.html`));
});

app.post("/login", (req, res) => {
  // sending back an HTML file that a broswer can render on the screen.
  console.log(` ${req.body}`);
  const bodyJSON = JSON.parse(req.body);
  res.json(bodyJSON);
});

