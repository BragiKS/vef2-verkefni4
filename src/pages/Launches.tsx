import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Launch } from '../types';

export function Launches() {
  const [launch, setLaunch] = useState<Array<Launch>>([
    {
      name: 'test',
      id: 1,
      image: 'test',
      status: { name: 'test', description: 'test' },
      mission: { name: 'test', description: 'test' },
      window: { start: new Date(), end: new Date() },
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://lldev.thespacedevs.com/2.2.0/launch'
      );

      const teamsJson = await response.json();

      setLaunch(teamsJson);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <p>Here are the teams:</p>
      <ul>
        {launch.map((launch) => {
          return (
            <li key={launch.id}>
              <Link to={`/launch/${launch.id}`}>{launch.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
