import express from "express";

const app = express();
const port = 7111;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.head("/callback", (req, res) => {
  res.status(200).send();
});
app.post("/callback", (req, res) => {
  console.log(req.body.action.data);
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`LeSSeX Trello Webhook App listening on port ${port}`);
});
