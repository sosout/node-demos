#!/usr/bin/env node
/**
 * Copyright (c) 2018-present, Weich, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

// 监听Promise没有被捕获的失败函数
process.on('unhandledRejection', err => {
  throw err;
});
var spawn = require('cross-spawn');
const args = process.argv.slice(2);
const scriptIndex = args.findIndex(
  x => x === 'build' || x === 'eject' || x === 'start' || x === 'test'
);

const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

switch (script) {
  case 'build':
  case 'eject':
  case 'start':
  case 'test': {
    // 为了测试，将 t-scripts 目录和 bin 文件放在一起 
    const result = spawn.sync(
      'node',
      nodeArgs
        .concat(require.resolve('./t-scripts/' + script))
        .concat(args.slice(scriptIndex + 1)),
      { stdio: 'inherit' }
    );
    if (result.signal) {
      if (result.signal === 'SIGKILL') {
        console.log(
          'The build failed because the process exited too early. ' +
            'This probably means the system ran out of memory or someone called ' +
            '`kill -9` on the process.'
        );
      } else if (result.signal === 'SIGTERM') {
        console.log(
          'The build failed because the process exited too early. ' +
            'Someone might have called `kill` or `killall`, or the system could ' +
            'be shutting down.'
        );
      }
      process.exit(1);
    }
    process.exit(result.status);
    break;
  }
  default:
    console.log('Unknown script "' + script + '".');
    console.log('Perhaps you need to update react-scripts?');
    console.log(
      'See: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#updating-to-new-releases'
    );
    break;
}