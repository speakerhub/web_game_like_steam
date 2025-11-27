import express from "express";
import indexRoute from "./routes/index";
import loginRoute from "./routes/login";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", indexRoute);
app.use("/login", loginRoute);

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
