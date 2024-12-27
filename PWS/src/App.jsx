import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './New';
import Contact from '../src/Components/ContactUs/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
