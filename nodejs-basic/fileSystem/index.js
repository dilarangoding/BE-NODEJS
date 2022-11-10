const fs = require("fs");
const path = require("path");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal Membaca berkas");
    return;
  } else {
    console.log(data);
  }
};

fs.readFile(path.resolve(__dirname, "note.txt"), "UTF-8", fileReadCallback);
