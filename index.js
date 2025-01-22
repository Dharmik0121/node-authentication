const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectMongoDB } = require("./db");
require("dotenv").config();
const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");

const app = express();
const PORT = process.env.PORT || 8000;

//Database connection
connectMongoDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

//API endpoints
app.get("/", (req, res) => {
  res.send("HomePage");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.listen(PORT, () => console.log(`Server started at port number ${PORT}...`));
