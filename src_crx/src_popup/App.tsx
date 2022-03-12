import { useState } from "react";

function onSaveButtonClick(content: string) {
  chrome.storage.local.get(["token"], function (result) {
    if (content === undefined || content.length === 0) {
      alert("请输入有效内容");
    } else if (result.token === undefined) {
      alert("请先在设置页面填入 API");
    } else {
      fetch(result.token, {
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
          if (data.code === 0) {
            alert(data.msg);
            window.close();
          } else {
            alert(`上传失败，${data.msg}`);
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  });
}

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
          onSaveButtonClick(content);
        }}
      >
        发送
      </button>
    </div>
  );
}

export default App;
