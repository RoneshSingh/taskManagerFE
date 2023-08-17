import InputForm from "../components/InputForm";

function App() {
  return (
    <>
      <div className=" flex text-black">
        <div className="bg-red-300 w-1/4 flex-grow-0">
          <h1>User DashBoard</h1>
          <h1>UserName</h1>
          <div>
            <InputForm />
          </div>
          <div> Logout</div>
        </div>
        <div className="bg-blue-300 w-3/4 flex-grow">Dash</div>
      </div>
    </>
  );
}

export default App;
