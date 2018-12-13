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

## fs.lstatSync(path[, options])
同步版的 lstat() 。

方法返回一个stat数组对象，包含以下信息：(以下信息为案例中读取的文件信息，非默认值)
``` js
{
 dev : 0 ,
 mode : 33206 ,
 nlink : 1 ,
 uid : 0 ,
 gid : 0 ,
 rdev : 0 ,
 ino : 0 ,
 size : 378(字节) ,
 atime : Tue Jun 10 2014 13:57:13 GMT +0800 <中国标准时间> ,
 mtime : Tue Jun 13 2014 09:48:31 GMT +0800 <中国标准时间> ,
 ctime : Tue Jun 10 2014 13:57:13 GMT +0800 <中国标准时间>
}
```
## dirent.isFile()
如果 fs.Dirent 是一个普通文件，则返回 true。