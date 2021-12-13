const express = require("express");
const app = express();
const port = 5050;
require("./models/dbConfig");

const argonauteRoutes = require("./routes/argonauteController");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/argonautes", argonauteRoutes);

app.listen(port, () => {
  console.log(`Server started: http://localhost:${port}`);
});
