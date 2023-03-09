const express = require("express");
const dataSource = require("./utils").dataSource;
const api = require("./router/api");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", api);

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });
const port = 5000;

//Start Server
const start = async () => {
  await dataSource.initialize();
  app.listen(port, () =>
    console.log(`Server started on http://localhost:${port}`)
  );
};

start();
