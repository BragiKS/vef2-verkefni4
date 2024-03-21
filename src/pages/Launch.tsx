import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReactComponent as Rocket } from '../images/rocket.svg';
import { Launch } from '../types';

export function LaunchComponent() {
  const { id } = useParams();
  const [launch, setLaunch] = useState<Launch | null>(null);

  useEffect(() => {
    const fetchLaunch = async () => {
      try {
        const response = await fetch(
          `https://lldev.thespacedevs.com/2.2.0/launch/${id}`
        );
        const launchData = await response.json();
        setLaunch(launchData);
      } catch (error) {
        console.error('Error fetching launch:', error);
      }
    };

    fetchLaunch();
  }, [id]);

  if (!launch) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {launch.image === null ? (
        <Rocket />
      ) : (
        <img src={launch.image} alt="Loading img..." />
      )}
      <h3>{launch.mission.name}</h3>
      <p>{launch.mission.description}</p>
    </div>
  );
}
