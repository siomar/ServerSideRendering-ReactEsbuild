const esbuild = require("esbuild");

if (require.main === module) {
  build();
}

async function build() {
  await Promise.all([
    buildJS()
      .then((success) => {
        console.log("✅ Build JS complete");
      })
      .catch((error) => {
        console.error("💣 Error building JS");
        console.error(error);
      }),
  ]);
}

async function buildJS() {
  esbuild.build({
    entryPoints: [`${process.cwd()}/src/index.jsx`],
    bundle: true,
    outdir: `${process.cwd()}/build`,
  });
}

module.exports= build;
