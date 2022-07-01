const build = require("./build");
const server = require("../server");

if (require.main === module) {
  dev();
}

async function dev() {
  try {
    console.log("🤖 Starting building files");
    await build();
    console.log("🤖 Starting the server");
    await server();
  } catch (error) {
    console.error("💣 Error start application");
    console.error(error);
  }
}

module.exports = dev;
