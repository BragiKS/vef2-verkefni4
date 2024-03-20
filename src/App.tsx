import { Routes, Route } from 'react-router-dom';

import './App.css';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Layout } from './components/Layout/Layout';
import { Experiment } from './pages/Experiment';
import { Launches } from './pages/Launches';
import { Launch } from './pages/Launch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="launch" element={<Launches />} />
          <Route path="launch/:id" element={<Launch />} />
          <Route path="experiment" element={<Experiment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
