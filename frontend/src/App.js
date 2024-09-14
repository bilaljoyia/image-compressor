import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import CreatPost from './components/Dashbord/CreatPost';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/dashbor' element={<CreatPost/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;