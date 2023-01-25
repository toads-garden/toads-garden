const fs = require("fs");
const paths = {
  build: {
    root: "./build",
    assets: "./build/assets",
  },
  src: {
    imageAssets: "./client/assets/img",
  },
};

if (!fs.existsSync(paths.build.root)) {
  fs.mkdirSync(paths.build.root);
}

if (!fs.existsSync(paths.build.assets)) {
  const imageAssets = fs.readdirSync(paths.src.imageAssets);

  fs.mkdirSync(paths.build.assets);

  for (const asset of imageAssets) {
    fs.copyFileSync(
      `${paths.src.imageAssets}/${asset}`,
      `${paths.build.assets}/${asset}`
    );
  }
}

require("child_process").spawn(
  "parcel",
  ["index.html", "--no-autoinstall", "--open", "build"],
  {
    stdio: ["ignore", "inherit", "inherit"],
    shell: true,
  }
);
