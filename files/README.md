# fs
## fs.realpathSync
返回解析的路径

## fs.existsSync
文件是否存在

## fs.readdirSync
读取目录内容
``` js
// 以 Windows 系统为例
fs.readdirSync('E:\\_jobs\\node-demos\\files\\t-config');
// ['A.js', 'B.js']

|-- t-config
  |-- A.js
  |-- B.js
```