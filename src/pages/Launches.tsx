import React from 'react';
import { Link } from 'react-router-dom';
import { useLaunches } from '../components/LaunchesContext/LaunchesContext';

export function Launches() {
  const launches = useLaunches();

  return (
    <div>
      <ul>
        {launches.map(launch => (
          <li key={launch.id}>
            <Link to={`/launch/${launch.id}`}>{launch.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
