import { Routes, Route } from 'react-router-dom';

import Head from './components/Head';
//
import Home from './client/home';
import About from './client/about';
import Login from './client/login';
import MailTest from './client/MailTest';

// 
const App = () => {
  return (
  <div className="App">
    <Head />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mail_test" element={<MailTest />} />
    </Routes>
  </div>
  );
};

export default App;

