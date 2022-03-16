#笔记

vue文件第一行有波浪线提示，虽然项目能正常运行，但看着难受。

在package.json文件下找到"parserOptions"，添加一项配置："requireConfigFile" : false即可
