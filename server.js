require("dotenv").config(); //Allow Envirnment variables to be set on precess .env should be at top.

const express = require("express");
const app = express();
//middleware
app.use(express.json()); // parse json bodies in the object
//Global error handler  IMPORTANT function params must start with err
app.use("/posts", require("./routes/postRouter"));

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Somthing went wrong",
  });
});
//listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
