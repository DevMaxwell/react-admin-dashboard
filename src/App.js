import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Maindash from "./components/maindash/Maindash";
import Rightside from "./components/rightside/Rightside";

function App() {
  return (
    <div className='App'>
      <div className='AppGlass'>
        <Sidebar />
        <Maindash />
        <Rightside />
      </div>
    </div>
  );
}

export default App;
