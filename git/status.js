const execSync = require('child_process').execSync;
const chalk = require('chalk');

function getGitStatus() {
  try {
    let stdout = execSync(`git status --porcelain`, {
      stdio: ['pipe', 'pipe', 'ignore'],
    }).toString();
    return stdout.trim();
  } catch (e) {
    return '';
  }
}

const gitStatus = getGitStatus();
if (gitStatus) {
  // 此git存储库具有未跟踪的文件或未提交的更改
  console.error(
    chalk.red(
      'This git repository has untracked files or uncommitted changes:'
    ) +
      '\n\n' +
      gitStatus
        .split('\n')
        .map(line => line.match(/ .*/g)[0].trim())
        .join('\n') +
      '\n\n' +
      chalk.red(
        'Remove untracked files, stash or commit any changes, and try again.'
      )
  );
  process.exit(1);
}