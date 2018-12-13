const fs = require('fs-extra');
const path = require('path');

const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);
const paths = {
  // These properties only exist before ejecting:
  ownPath: resolveOwn('./files'),
};

const ownPath = paths.ownPath;
console.log(ownPath)

const folders = ['t-config', 't-config/jest', 't-scripts'];
// Make shallow array of files paths
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

console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile') )