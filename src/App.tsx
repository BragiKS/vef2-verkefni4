import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Layout } from './components/Layout/Layout';
import { Launches } from './pages/Launches';
import { LaunchComponent } from './pages/Launch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="launch" element={<Launches />} />
          <Route path="launch/:id" element={<LaunchComponent />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
