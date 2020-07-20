const express = require("express");
const app = express();
const axios = require("axios");
const Base64 = require("js-base64").Base64;
const io = require("socket.io")(server);
const cors = require("cors");

app.use(cors());

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (msg) => {});
});

app.get("/", async (req, res) => {
  try {
    let username = "5edca77ee833d9165b72fd13";
    let password = "9dad3e98096e120917f3261f4734683e";
    let url1 =
      "https://5edca77ee833d9165b72fd13:9dad3e98096e120917f3261f4734683e@api.sigfox.com/v2/device-types/5ed7b65de833d9165b8ef3c8/messages";
    let url2 =
      "https://5edca77ee833d9165b72fd13:9dad3e98096e120917f3261f4734683e@api.sigfox.com/v2/devices/5ed7b65de833d9165b8ef3c8/messages";
    let encoded = `${username}:${password}`;
    let result = await axios({
      url: url1,
      method: "POST",
      //   headers: {
      //     Authorization: `Basic ${Base64.atob(encoded)}`,
      //   },
    });
    console.log(result);
    res.json({ data: result.data.data });
  } catch (e) {
    console.log(e);
  }
});

// Temp::uint:16:little-endian latitude::float:32:little-endian longitude::float:32:little-endian

// alawfy76@gmail.com

/*
Temperature: {customData#Temp}
Longitude:   {customData#longitude}
Latitude :   {customData#latitude}

https://www.google.com/maps/?q={customData#latitude},{customData#longitude}
*/

var server = app.listen(4000, () => console.log(`listening on port ${3000}`));
