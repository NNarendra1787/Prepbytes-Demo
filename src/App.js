// import logo from './logo.svg';s
import { Provider } from "react-redux";
import "./App.css";
// import HomePage from './Components/Home/HomePage';
// import Navbar from './Components/Navbar';
// import Navbar3 from './Components/Navbar3';
import Routering from "./Components/Routering";
import Store from "./Components/Redux/Store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Provider store={Store}>
        <Routering />
        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  );
}

export default App;
