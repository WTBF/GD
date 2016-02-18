
// 加载模块
var requireDir = require('require-dir');

// 导入tasks目录下的任务
requireDir('./gulp/tasks', { recurse: true });
