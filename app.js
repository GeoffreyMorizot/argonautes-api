const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5050;
require("./models/dbConfig");

app.use(cors());
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
