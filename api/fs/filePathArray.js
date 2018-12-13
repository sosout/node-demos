/**
 * 文件路径浅数组
 */
const fs = require('fs-extra');
const path = require('path');

const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);
const paths = {
  ownPath: resolveOwn('./fs'),
};

// .../node-demos/api/fs
const ownPath = paths.ownPath;

const folders = ['t-config', 't-config/jest', 't-scripts'];

const files = folders.reduce((files, folder) => {
  return files.concat(
    fs
      .readdirSync(path.join(ownPath, folder))
      // set full path
      .map(file => path.join(ownPath, folder, file))
      // omit dirs from file list
      .filter(file => fs.lstatSync(file).isFile())
  );
}, []);

// [ '.../node-demos/api/fs/t-config/.DS_Store',
//   '.../node-demos/api/fs/t-config/env.js',
//   '.../node-demos/api/fs/t-config/paths.js',
//   '.../node-demos/api/fs/t-config/webpack.config.dev.js',
//   '.../node-demos/api/fs/t-config/webpack.config.prod.js',
//   '.../node-demos/api/fs/t-config/webpackDevServer.config.js',
//   '.../node-demos/api/fs/t-config/jest/babelTransform.js',
//   '.../node-demos/api/fs/t-config/jest/cssTransform.js',
//   '.../node-demos/api/fs/t-config/jest/fileTransform.js',
//   '.../node-demos/api/fs/t-scripts/index.js' ]

module.exports = {
  files,
  ownPath
};