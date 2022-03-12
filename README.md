# inBox Note Chrome

## 介绍

本项目是安卓软件 [inBox Note](https://gudong.web.cloudendpoint.cn/inbox/guide.html) 的浏览器插件，通过在插件中输入笔记，即可在 APP 启动时自动同步。

## 如何使用

鉴于目前 chrome 商店审核未通过，你可以通过自行下载解压的方式导入。

### 下载

访问 [release](https://github.com/hyoban/inbox-chrome-ext/releases) 界面下载 inbox-chrome-ext-xxx.zip 压缩包并解压。

### 启用浏览器插件开发者模式

访问 [扩展程序](chrome://extensions/) 界面，右上角启用开发者模式。

<img width="1313" alt="image" src="https://user-images.githubusercontent.com/38493346/158009203-c1d0e753-0846-4a3d-9812-f56363d68d95.png">

### 加载插件

点击左上角`加载已解压的扩展程序`，选择目录为此前压缩包解压出的文件夹。

### 设置 token

在安装完成后，浏览器会跳出设置 token 的界面。

<img width="934" alt="image" src="https://user-images.githubusercontent.com/38493346/158009326-23f2e8dd-d5b9-436f-8ba2-0b0ad04f69f8.png">

在此处填写你账号对应的 token，然后点击保存按键。

### 开始输入

<img width="320" alt="image" src="https://user-images.githubusercontent.com/38493346/158009377-51cf665b-1b6f-446f-af76-c0d9837269da.png">

点击扩展程序列表中的 inBox Note 图标，即可开始输入笔记。你可以将其固定，以便于打开。

<img width="394" alt="image" src="https://user-images.githubusercontent.com/38493346/158009460-bb985753-9c51-4d37-be1b-fa1412854a7e.png">

输入完成后点击保存即可在手机 APP 中查看同步的笔记。

## 关于

本项目基于 [vite-react-crx](https://github.com/Mirrorgo/vite-react-crx) 模板开发，感谢原作者。
