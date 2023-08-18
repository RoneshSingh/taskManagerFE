function App() {
  return (
    <>
      <div className="flex h-[100vh] text-black">
        <div className="w-1/5 flex-grow-0 rounded-lg border-blue-500 border-solid border-2 bg-gradient-to-r from-violet-300 via-blue-300 to-blue-200 mr-1 ml-1 my-2">
          <div className="border-violet-400 border-solid border-2 rounded-lg m-2 my-1">
            User DashBoard
          </div>
          <h1 className="flex justify-center text-2xl m-4">Hello UserName</h1>

          {/* Task Manager Form */}
          <div className="mt-4 p-4 bg-blue rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 flex justify-center">
              Need to Add Task?
            </h2>
            <form>
              <div className="mb-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 p-2 border rounded-md w-full text-white"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="mt-1 p-2 border rounded-md w-full text-white"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="mt-1 p-2 border rounded-md w-full  text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Add Task
              </button>
            </form>
          </div>

          <button
            type="submit"
            className=" m-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Log Out
          </button>
          {/* End Task Manager Form */}
        </div>
        <div className="w-3/4  rounded-lg border-blue-500 border-solid border-2 flex-grow bg-gradient-to-r from-blue-200 via-blue-300 to-violet-300 mr-1 my-2">
          Dash
        </div>
      </div>
    </>
  );
}

export default App;
