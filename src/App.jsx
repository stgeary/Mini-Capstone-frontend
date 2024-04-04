import reactLogo from './assets/react.svg'
import './App.css'
import {Header} from "./header";
import {Content} from "./content";
import {Footer} from "./footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  const handleOpenLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);
  return (
    <>
      <div>
        <BrowserRouter>
        <Header />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <Content />
      <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
