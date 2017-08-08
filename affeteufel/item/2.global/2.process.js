/**
 * Created by AffeTeufel on 2017/8/7.
 */
//->process.kill(1066);结束进程为1066的进程
//->process.stdin.on('data',callback)//->当数据发生变化时执行回调函数callbaack
//->process.stdout.write('hello')//->相当于console.log('hello')
//->process.argv//->进程的命令行参数
//->process.on('exit',callback)//->当进程结束时执行回调函数callback
//->process.on('uncaughtException',callback)//->当为捕获到异常进程时执行回调函数
//->process.cwd()//->当前工作目录
//->process.chdir()//->改变当前工作目录

//->多线程
//->process.nextTick>setTimeout>setImmediate>异步IO