import { useState } from "react";

const base_url = "http://qcbzf9.app.cloudendpoint.cn/api/inbox/";

function App() {
  const [content, setContent] = useState("");

  return (
    <div className="w-96 h-96 p-3 flex flex-col bg-gray-200">
      <label htmlFor="content" className="mb-3 inline-block text-lg">
        笔记：
      </label>
      <textarea
        id="content"
        rows={10}
        placeholder="请在此输入笔记"
        className="mb-3 appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        type="submit"
        className="self-end mr-2 w-24 py-2 px-4 appearance-none bg-gray-200 text-gray-900 shadow-sm border border-gray-400 rounded-md"
        onClick={() => {
          chrome.storage.local.get(["token"], function (result) {
            fetch(base_url + result.token, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                content,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.msg === "已提交") {
                  alert("上传成功");
                  window.close();
                } else {
                  alert("上传失败，请检查 token 设置和网络");
                }
              })
              .catch((error) => {
                alert(error);
              });
          });
        }}
      >
        发送
      </button>
    </div>
  );
}

export default App;
