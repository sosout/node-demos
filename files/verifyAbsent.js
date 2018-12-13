/**
 * 验证文件是否已存在
 * 在 files 文件下执行命令
 */
const fs = require('fs-extra');
const path = require('path');

// .../node-demos/files
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// .../node-demos/files
const appPath = resolveApp('.');

function verifyAbsent(file) {
  /**
   * .../node-demos/files/t-config
   * .../node-demos/files/t-config/jest
   * .../node-demos/files/t-scripts
   */
  if (fs.existsSync(path.join(appPath, file))) {
    console.error(
      `\`${file}\` already exists in your app folder. We cannot ` +
        'continue as you would lose all the changes in that file or directory. ' +
        'Please move or delete it (maybe make a copy for backup) and run this ' +
        'command again.'
    );
    process.exit(1);
  }
}

const folders = ['t-config', 't-config/jest', 't-scripts'];
folders.forEach(verifyAbsent);