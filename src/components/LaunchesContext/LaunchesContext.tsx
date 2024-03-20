import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Launch } from '../../types';

const LaunchesContext = createContext<Launch[]>([]);

export const useLaunches = () => useContext(LaunchesContext);

interface LaunchesProviderProps {
  children: ReactNode;
}

export const LaunchesProvider: React.FC<LaunchesProviderProps> = ({ children }) => {
  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch('https://lldev.thespacedevs.com/2.2.0/launch');
      const launchesJson = await response.json();
      setLaunches(launchesJson.results);
    };

    fetchLaunches();
  }, []);

  return (
    <LaunchesContext.Provider value={launches}>
      {children}
    </LaunchesContext.Provider>
  );
};
