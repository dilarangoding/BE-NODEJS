// const { route } = require("@hapi/hapi/lib/cors");

const routes = [
  {
    method: "POST",
    path: "/login",
    handler: (req, h) => {
      const { username, password } = req.payload;
      return `Welcome ${username}`;
    },
  },
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return `Homepage`;
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return `Halaman tidak dapat diakses menggunakan property tersebut`;
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return `About page`;
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai, ${name}`;
      }

      return `Hello ${name}`;
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return `Halaman tidak bisa diakses menggunakan method tersebut`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return `Halaman tidak ditemukan`;
    },
  },
];

module.exports = routes;
