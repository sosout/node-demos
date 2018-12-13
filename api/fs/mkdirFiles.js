const fs = require('fs-extra');
const path = require('path');
const { files, ownPath } = require('./filePathArray');
const chalk = require('chalk');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// .../node-demos/api/fs
const appPath = resolveApp('.');
const cyan = chalk.cyan;

const folders = ['t-config', 't-config/jest', 't-scripts'];

folders.forEach(folder => {
  fs.mkdirSync(path.join(appPath, folder));
});

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  if (content.match(/\/\/ @remove-file-on-eject/)) {
    return;
  }
  // [\s\S]* 完全通配 
  content =
    content
      // Remove dead code from .js files on eject
      .replace(
        /\/\/ @remove-on-eject-begin([\s\S]*?)\/\/ @remove-on-eject-end/gm,
        ''
      )
      // Remove dead code from .applescript files on eject
      .replace(
        /-- @remove-on-eject-begin([\s\S]*?)-- @remove-on-eject-end/gm,
        ''
      )
      .trim() + '\n';
  console.log(`  Adding ${cyan(file.replace(ownPath, ''))} to the project`);
  console.log(file.replace(ownPath, appPath))
  fs.writeFileSync(file.replace(ownPath, appPath), content);
})