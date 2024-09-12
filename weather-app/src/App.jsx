import "./App.css";
import Weather from "./components/Weather";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Weather />
      <ToastContainer />
    </>
  );
}

export default App;
