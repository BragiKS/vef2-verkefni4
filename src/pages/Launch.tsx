import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Launch } from '../types';

export async function Launch() {
  const [launch, setLaunch] = useState<Launch>({
    name: 'test',
    id: 1,
    image: 'test',
    status: { name: 'test', description: 'test' },
    mission: { name: 'test', description: 'test' },
    window: { start: new Date(), end: new Date() },
  });

  const params = useParams();
  const id = params.id;

  const response = await fetch(
    `https://lldev.thespacedevs.com/2.2.0/launch/${id}`
  );
  const launchJson = await response.json();

  setLaunch(launchJson);

  return (
    <>
      <h2>{launch.name}</h2>
    </>
  );
}
