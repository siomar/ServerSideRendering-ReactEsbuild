import { renderToPipeableStream } from "react-dom/server";
import App from "../src/App";

let assets = {
  "index.js": "/index.js",
  "main.css": "/main.css",
};

function render(req, res) {
  const { pipe, abort } = renderToPipeableStream(<App assets={assets} />, {
    bootstrapScripts: [assets["index.js"]],
    onShellReady() {
      res.setHeader("Content-type", "text/html");
      pipe(res);
    },
    onError(error) {
      console.log("Error renderToPipeableStream: ", error);
      abort();
    },
  });
}

module.exports = render;
