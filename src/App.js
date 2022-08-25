import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Page from './pages/Pages'
import './index.css';
import { BrowserRouter } from 'react-router-dom';

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
