import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import './App.css';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Layout } from './components/Layout/Layout';
import { Experiment } from './pages/Experiment';
import { Launches } from './pages/Launches';
import { LaunchComponent } from './pages/Launch';
import { LaunchesProvider } from './components/LaunchesContext/LaunchesContext';

function App() {
  return (
    <div className="App">
      <LaunchesProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="launch" element={<Launches />} />
            <Route path="launch/:id" element={<LaunchComponent />} />
            <Route path="experiment" element={<Experiment />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LaunchesProvider>
    </div>
  );
}

export default App;
