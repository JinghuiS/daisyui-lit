// come from https://github.com/daief/daisyui-vue.git
const download = require("download-git-repo");
const path = require("path");
const pkg = require("../package.json");
const fs = require("fs-extra");
//github.com/saadeghi/daisyui.git
https: download(
  "saadeghi/daisyui",
  path.resolve(__dirname, "../packages/styles/_daisyui/"),
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    fs.emptyDirSync(
      path.resolve(__dirname, "../packages/styles/_daisyui/examples")
    );
    console.log("Clone done.");
  }
);
