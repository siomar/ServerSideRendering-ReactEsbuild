const babelRegister = require("@babel/register");
babelRegister({
  ignore: [/[\\\/](build|server\/server|node_modules)[\\\/]/],
  presets: [["react-app", { runtime: "automatic" }]],
  plugins: ["@babel/plugin-syntax-dynamic-import"],
});

const express = require("express");
const render = require("./render");

if (require.main === module) {
  server();
}

function server() {
  const PORT = 8080;
  const app = express();

  app.get("/", (req, res) => {
    try {
      render(req, res);
    } catch (error) {
      return res.send(error);
    }
  });

  app.use(express.static("build"));
  app.use(express.static("public"));

  app.listen(PORT, () => {
    console.log(`
        ----------------------------------------------------
        Start! http://localhost:${PORT}
        ----------------------------------------------------
        `);
  });
}

module.exports = server;
