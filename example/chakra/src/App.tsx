import { Routes, Route } from 'react-router-dom';

//
import Head from './components/Head';
import Home from './client/home';
import About from './client/about';
//
import AlertDialog from './client/AlertDialog';
import Button from './client/Button';
import Card from './client/Card';
import Input from './client/Input';
import TextArea from './client/TextArea';
// 
const App = () => {
  return (
  <div className="App">
    <Head />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/button" element={<Button />} />
      <Route path="/input" element={<Input />} />
      <Route path="/card" element={<Card />} />
      <Route path="/alert_dialog" element={<AlertDialog />} />
      <Route path="/textarea" element={<TextArea />} />
    </Routes>
  </div>
  );
};

export default App;

