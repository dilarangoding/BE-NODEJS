const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-type", "application/json");
  response.setHeader("X-Powered-By", "NodeJs");

  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: `ini adalah homepage`,
        })
      );
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: "Halaman tidak ditemukan",
        })
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "Ini adalah About",
        })
      );
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.statusCode = 200;
        response.end(
          JSON.stringify({
            message: `Halo ${name}! ini adalah halaman about`,
          })
        );
      });
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `Halaman tidak bisa diakses menggunakan ${method} request`,
        })
      );
    }
  } else {
    response.statusCode = 400;
    response.end(
      JSON.stringify({
        message: "Halaman tidak ditemukan",
      })
    );
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Development server started http://${host}:${port}`);
});
