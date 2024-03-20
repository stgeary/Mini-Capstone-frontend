import reactLogo from './assets/react.svg'
import './App.css'
import {Header} from "./header";
import {Content} from "./content";
import {Footer} from "./footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Content />
      <Footer />
    </>
  );
}

export default App
