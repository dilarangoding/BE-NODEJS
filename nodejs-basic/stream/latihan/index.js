const fs = require("fs");
const path = require("path");

const readbleStream = fs.createReadStream(
  path.resolve(__dirname, "./input.txt"),
  {
    highWaterMark: 15,
  }
);

const writableStream = fs.createWriteStream(
  path.resolve(__dirname, "./output.txt")
);

readbleStream.on("readable", () => {
  try {
    writableStream.write(`${readbleStream.read()}\n`);
  } catch (error) {}
});

readbleStream.on("end", () => {
  writableStream.end();
});
