# package-bin

## 问题
### #! /usr/bin node 和 #! /usr/bin/env node 两者的区别
它们是Unix和Linux脚本语言的第一行，目的就是指出，你想要你的这个文件中的代码用什么可执行程序去运行它。
**!/usr/bin node：**告诉操作系统执行这个脚本的时候，调用`/usr/bin`下的node解释器；
**!/usr/bin/env node：**这种用法是为了防止操作系统用户`没有将node装在默认的/usr/bin路径`里。当系统看到这一行的时候，首先会到env设置里查找node的安装路径，再调用对应路径下的解释器程序完成操作。
**!/usr/bin node**相当于写死了node路径;
**!/usr/bin/env node**会去环境设置寻找node目录,推荐这种写法

### node 异常捕获
``` js
process.on('uncaughtException', function(err){	
  //监听未捕获的异常
}) 

process.on('unhandledRejection', function(err,promise) {	
  //监听Promise没有被捕获的失败函数
})
```

### process.argv
process 对象是一个全局变量，它提供当前 Node.js 进程的有关信息，以及控制当前 Node.js 进程。 因为是全局变量，所以无需使用 require()。

process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。第一个元素为process.execPath。如果需要获取argv[0]的值请参见node文档的 process.argv0。第二个元素为当前执行的JavaScript文件路径。剩余的元素为其他命令行参数。

