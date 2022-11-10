const fs = require("fs");

const writableStream = fs.createWriteStream("output.txt");

writableStream.write("Ini Teks Pertama!\n");
writableStream.write("Ini Teks Kedua!\n");
writableStream.end("akhir dari writable stream");
