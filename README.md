# inBox Note Chrome

## 介绍

本项目是安卓软件 [inBox笔记](https://www.coolapk.com/apk/name.gudong.think) 的浏览器插件。
>  inBox 笔记是一个离线的 Android 卡片笔记软件，帮助你快速记录灵感、记录想法，inBox 的最大特点是离线，支持 WebDav，自由的数据导入导出。

通过该插件，可以让自己在使用电脑时也能快速记录自己的想法，只需要打开浏览器插件，即可完成灵感的记录。

## 如何安装

请访问 [chrome 插件主页](https://chrome.google.com/webstore/detail/inbox-note/oohnohniochgefahfjehkdhgkgaokjai)，以添加到 chrome。

或者前往 [release](https://github.com/hyoban/inbox-chrome-ext/releases) 界面下载 crx 文件拖入 chrome。

你的浏览器内核版本需要 >= 88

## 如何使用

### 准备
* 安装 inBox App [酷安下载](https://www.coolapk.com/apk/name.gudong.think)
* 在应用内注册账号
* 打开账户详情页，获取自己账号的独有 API 地址，如下所示：

![IMG_20220312_193731](https://user-images.githubusercontent.com/38493346/158016482-fc9698d9-d798-4789-b9d3-ff4304dd7750.jpg)

### 设置 api 链接

在安装完成后，浏览器会跳出设置 api 链接的界面。

<img width="748" alt="image" src="https://user-images.githubusercontent.com/38493346/158016451-1e5c7ba2-7bb5-4bd9-8f56-19c45970d027.png">

在此处填写你账号对应的 api 链接，然后点击保存按键。

### 开始输入

<img width="394" alt="image" src="https://user-images.githubusercontent.com/38493346/158009460-bb985753-9c51-4d37-be1b-fa1412854a7e.png">

只要保存完毕，此时打开 inBox 笔记，只要做一次前后台切换，笔记就会自动添加到 app 的笔记列表中。

>  ps：该功能目前作者尚在测试阶段，如果需要在 app 中接受笔记信息，需要找作者加白名单，提供自己的账号即可。如何联系作者？在 app 关于页面可以找到他的联系方式。

ps：你可以将其固定，以便于快速打开，如下所示，点击置顶。

<img width="320" alt="image" src="https://user-images.githubusercontent.com/38493346/158009377-51cf665b-1b6f-446f-af76-c0d9837269da.png">

## 小技巧

输入框内支持加粗，列表两个简单的 markdown 语法，例如
>  - 记录想法，帮我我们更好的**思考**

## 关于

本项目基于 [vite-react-crx](https://github.com/Mirrorgo/vite-react-crx) 模板开发，感谢原作者。
