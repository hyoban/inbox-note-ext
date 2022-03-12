import { useEffect, useState } from "react";

import { base_url } from "../config";

function onSaveButtonClick(token: string) {
  if (token === undefined || token.length === 0) {
    alert("请输入 token");
  } else {
    fetch(base_url + token, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code !== -4) {
          saveToken(token);
        } else {
          alert(data.msg);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
}

function saveToken(token: string) {
  chrome.storage.local.set({ token }, function () {
    alert("token 已被保存");
  });
}

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    chrome.storage.local.get(["token"], function (result) {
      setToken(result.token);
    });
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen pt-2">
      <div className="container mx-auto inputs w-full max-w-2xl p-6">
        <h2 className="text-2xl text-gray-900">账户设置</h2>
        <div className="w-full md:w-full px-3 mb-6 mt-6 border-t border-gray-400 pt-4">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            token
          </label>
          <p className="block tracking-wide text-gray-700 text-xs mb-2">
            请参考文档设置 token，以保证插件工作正常。
          </p>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
            type="text"
            value={token}
            onChange={(e) => {
              setToken(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
            type="submit"
            onClick={() => {
              onSaveButtonClick(token);
            }}
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
