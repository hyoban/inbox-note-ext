const contentScriptRoot = document.createElement("div");
contentScriptRoot.id = "content-script-root"; //正式上线时,这个名称需要更加复杂且可读,比如加上插件名称
document.body.appendChild(contentScriptRoot);

let secScript = document.createElement("script");
secScript.setAttribute("type", "module");
secScript.src = chrome.runtime.getURL("/src_crx/src_content_script/main.js"); //TODO:修改成一个自动字符串匹配修改后缀的东西(tsx=>js)
document.body.appendChild(secScript);
