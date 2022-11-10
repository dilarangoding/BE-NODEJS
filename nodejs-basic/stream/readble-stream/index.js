const fs = require("fs");

const readbleStream = fs.createReadStream("article.txt", {
  highWaterMark: 10,
});

readbleStream.on("readable", () => {
  try {
    process.stdout.write(`[${readbleStream.read()}]`);
  } catch (error) {}
});

readbleStream.on("end", () => {
  console.log("done");
});
