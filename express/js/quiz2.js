const express = require("express");

const app = express();

app.get("/multiply", (req, res) => {
  const { value1, value2 } = req.query;

  res.send(
    `<h1>The first value is <span style='color:red'> ${value1}</span> and The second value is <span style='color:red'>${value2}</span> and the multiply is <span style='color:red'>${
      value1 * value2
    }</span> </h1> `
  );
});

const port = 3600;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
