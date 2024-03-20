import React from 'react';
import { useParams } from 'react-router-dom';
import { useLaunches } from '../components/LaunchesContext/LaunchesContext';

export function LaunchComponent() {
  const { id } = useParams();
  const launches = useLaunches();
  const launch = launches.find(l => l.id.toString() === id);

  if (!launch) {
    return <div>Launch not found</div>;
  }

  return (
    <div>
      <h2>{launch.name}</h2>
      {/* Display other details of the launch */}
    </div>
  );
}