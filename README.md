# vite-react-crx
[本仓库](https://github.com/Mirrorgo/vite-react-crx)基于react,采用各种最新的技术开发chrome extension
> 通用配置为master分支,我个人的习惯为mirrorgo分支
## 技术选型&开发环境
* pnpm 6.31.0
  * 参见👉[pnpm](https://juejin.cn/post/6932046455733485575)
* vite 2.8.0
  * 快
  * bundleless一定会成为未来主流,当前vite体验更好
  * https://www.yuque.com/lalala-wm82o/qvhwgq/qkvgeo
* react 17.0.2
* manifest version:3
  * v2要被抛弃了
* typescript
## 主要功能
* chrome相关api的代码补全
* content_script注入的内容可以写jsx而不是原生js
* 优化dev环境下的开发体验,且可以直接看到content_script.js注入的UI(无需在真实网页中即可查看content_script.js注入UI的效果)
* 插件热重载(不需要麻烦的手动刷新啦)
## 本项目采用的项目结构
```
.
├── dist //打包后的文件
|   ├── manifest.json
|   ├── options.js
|   ├── popup.js
|   ├── src_crx
|   │   ├── service_worker.js
|   │   ├── content_script.js
|   │   ├── options.html
|   │   ├── popup.html
|   │   └── src_content-script
|   │       └── main.js
|   └── ...//其他内容,不必太过关注,不一一列举了
├── README.md
├── index.html //dev环境下用于测试的页面,打包时不会使用
├── manifest.json //chrome插件的入口
├── package.json
├── pnpm-lock.yaml
├── src //index.html的react文件
│   ├── App.tsx
│   ├── favicon.svg
│   ├── main.tsx
│   └── vite-env.d.ts
├── src_crx
│   ├── service_worker.ts //打包后就是service_worker.js文件
│   ├── content_script.ts //打包后就是content_script.js文件,里面注入了一个dom节点和一个script标签(指向src_content_script)
│   ├── options.html //options页面的入口
│   ├── popup.html //popup页面的入口
│   ├── src_content_script //打包后为main.js文件,描述了content-script所注入的UI的react文件
│   │   ├── App.tsx
│   │   ├── dev_index.html //为了在dev环境下方便查看content-script注入的UI的效果而建的html文件,在build后不会包含在其中
│   │   └── main.tsx
│   ├── src_options //options页面的react文件
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── src_popup //popup页面的react文件
│       ├── App.tsx
│       └── main.tsx
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts //vite的配置文件
```
## 使用方法
### 常规开发环境
* 运行dev即可,会进入一个专用的开发页面,这个页面在打包的时候并不会包括在内

chrome插件本身是一个多页面应用,所有的页面都是一个独立的html  
分割线以上的内容在打包后也是一个html页面  
在分割线以下的内容是打包的时候不会实际存在的页面  
比如content-script,在实际使用的时候是一个js文件,注入用户正在浏览的页面来使用  
这里只是额外编写了一个html页面引入content_script注入的内容,用于在开发时更方便的查看注入的UI的效果  

### chrome插件环境
* 运行watch
参见下方"插件热重载"部分
* 运行build

这两种方式都是在运行脚本后在开发者模式下引入dist文件夹  
watch运行后更改源码会自动刷新  
build运行后需要手动刷新插件  
### 插件热重载
默认已经在项目的package.json中配置插件热重载的指令
```json
"scripts": {
    "dev": "vite",
    "watch": "tsc && vite build --watch",// 开发时使用即可实现插件的热重载
    "build": "tsc && vite build",
    "preview": "vite preview"
}
```
这样，开发时使用watch即可启用热重载功能，其体现在 2 个方面（修改保存时）：
* Chrome 浏览器自动更新当前开发的插件；
* 正在调用的网页会自动刷新  
但在打包发布的时候，请使用 build。因为热重载时，dist 中会生成多个和你项目无关的、支撑热重载功能的临时文件。
## 搭建方法
### 方法1(即使使用方法1,也一定要看看方法2,这样可以更好的对自己项目的配置进行各种修改)
下载本项目到本地,删除掉不需要的内容即可
### 方法2
一步步搭建一个和本项目一致的项目👉[教程](docs/guide.md)
## 参考
文档部分参考了👉[这篇文章](https://github.com/yeqisong/vite-plugin-vue-crx3/blob/master/README.md)
项目构建参考了👉[这个项目](https://github.com/KipSong/vite-chrome-extension)

## 感谢
[vite-chrome-extension项目作者](https://github.com/KipSong)的答疑解惑

---
朋友,不给个STAR嘛😘