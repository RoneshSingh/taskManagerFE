"use client";

const page = () => {
  return (
    <div className="flex h-[100vh] flex-row bg-white">
      <div className="backdrop-blur-2.5 -webkit-backdrop-blur-2.5 border-1 mb-6 ml-6 mr-1.5 mt-6 flex w-[260px] transform justify-center rounded-2xl h-[945px] border border-[rgba(255,255,255,0.18)] bg-gradient-to-br from-pink-300 to-indigo-500 bg-opacity-20 pt-7 shadow-md transition-transform duration-300 hover:scale-105 opacity-70">
        <button>hello</button>
        <button
          onClick={() => {
            alert("hello");
          }}
        >
          hello
        </button>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="backdrop-blur-2.5 -webkit-backdrop-blur-2.5 border-1 rounded-10 mb-3 ml-1.5 mr-6 mt-6 h-[8vh] transform rounded-2xl border border-[rgba(255,255,255,0.18)] bg-gradient-to-br from-pink-200 to-blue-500  bg-opacity-20 shadow-md transition-transform duration-300 hover:scale-105 opacity-70"></div>
        <div className="flex flex-row">
          <div className="backdrop-blur-2.5 -webkit-backdrop-blur-2.5 border-1 rounded-10 mb-6 ml-1.5 mr-1.5 h-[850px] w-[360px] flex-1 transform rounded-2xl border border-[rgba(255,255,255,0.18)] bg-gradient-to-br from-indigo-300 to-purple-500 bg-opacity-20 shadow-md transition-transform duration-300 hover:scale-105 opacity-70"></div>
          <div className="flex-1">
            <div className="backdrop-blur-2.5 -webkit-backdrop-blur-2.5 border-1 rounded-10 mb-3 ml-1.5 mr-6 h-[418px] flex-1 transform rounded-2xl border border-[rgba(255,255,255,0.18)] bg-gradient-to-br from-purple-300 to-blue-500 bg-opacity-20 shadow-md transition-transform duration-300 hover:scale-105 opacity-70"></div>
            <div className="backdrop-blur-2.5 -webkit-backdrop-blur-2.5 border-1 rounded-10 mb-3 ml-1.5 mr-6 h-[418px] flex-1 transform rounded-2xl border border-[rgba(255,255,255,0.18)] bg-gradient-to-br from-indigo-300 to-blue-500 bg-opacity-20 shadow-md transition-transform duration-300 hover:scale-105 opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
