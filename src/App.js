import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Page from "./pages/Pages";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Page />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
