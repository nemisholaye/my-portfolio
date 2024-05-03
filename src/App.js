import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/header";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
function App() {
  return (
   <>
   <Navbar/>
   <Header/>
   <Skills/>
   <Portfolio/>
   </>
  );
}

export default App;
