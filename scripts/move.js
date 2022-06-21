const fs = require("fs-extra");
const path = require("path");

const esPath = path.resolve(__dirname, "../build/es");
const libPath = path.resolve(__dirname, "../build/lib");
const styles = path.resolve(__dirname, "../packages/styles/css/theme");
const build = path.resolve(__dirname, "../packages/daisyui-lit");
const typesPath = path.resolve(__dirname, "../build/types");

function moveBuild() {
  fs.moveSync(esPath, build + "/es");
  fs.moveSync(libPath, build + "/lib");
  fs.moveSync(typesPath, build + "/types");
  fs.copySync(styles, build + "/styles");
}

function removeBuild() {
  if (fs.existsSync(build + "/es")) {
    fs.removeSync(build + "/es");
  }
  if (fs.existsSync(build + "/lib")) {
    fs.removeSync(build + "/lib");
  }
  if (fs.existsSync(build + "/types")) {
    fs.removeSync(build + "/types");
  }
  if (fs.existsSync(build + "/styles")) {
    fs.removeSync(build + "/styles");
  }
}

removeBuild();
moveBuild();
