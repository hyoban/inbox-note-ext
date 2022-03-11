function App() {
  return (
    <div className="w-96 h-96 p-3 flex flex-col bg-gray-200">
      <label htmlFor="content" className="mb-3 inline-block text-lg">
        笔记：
      </label>
      <textarea
        id="content"
        rows={10}
        placeholder="请输入 markdown 格式笔记"
        className="mb-3 appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
        required
      />
      <button
        type="submit"
        className="self-end mr-2 w-24 py-2 px-4 appearance-none bg-gray-200 text-gray-900 shadow-sm border border-gray-400 rounded-md"
      >
        发送
      </button>
    </div>
  );
}

export default App;
