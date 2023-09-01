import './App.css'
import {useEffect} from "react";
import packageJson from '../package.json';
import Header from "./components/Header";
import LoginPage from "./pages/Login";

function App() {


  const version = packageJson.version;

  useEffect(() => {
    const lastVersion = localStorage.getItem('appVersion');
    if (lastVersion !== version) {
      localStorage.clear();
      localStorage.setItem('appVersion', version);
    }
  }, [version]);

  function renderPage() {
    return <LoginPage/>
  }

  return (
      <div className="App">
        <Header/>
        {renderPage()}
      </div>
  )
}

export default App
