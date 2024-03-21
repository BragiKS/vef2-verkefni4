import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Launch } from '../types';
import SearchBar from '../components/SearchBar/SearchBar';
import { Button } from '../components/Button/Button';
import { List } from '../components/List/List';

export function Launches() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [nextOffset, setNextOffset] = useState<string | null>(null);
  const [previousOffset, setPreviousOffset] = useState<string | null>(null);

  const fetchLaunches = async (url: string) => {
    try {
      const response = await fetch(url);
      const launchesJson = await response.json();
      setLaunches(launchesJson.results);
      setNextOffset(launchesJson.next);
      setPreviousOffset(launchesJson.previous);
    } catch (error) {
      console.error('Error fetching launches:', error);
    }
  };

  useEffect(() => {
    fetchLaunches('https://lldev.thespacedevs.com/2.2.0/launch');
  }, []);

  const handleNextClick = () => {
    if (nextOffset) {
      fetchLaunches(nextOffset);
    }
  };

  const handlePreviousClick = () => {
    if (previousOffset) {
      fetchLaunches(previousOffset);
    }
  };

  const handleSearch = (query: string) => {
    fetchLaunches(
      `https://lldev.thespacedevs.com/2.2.0/launch/?mode=list&search=${query}`
    );
  };

  if (!launches) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {launches.map((launch) => (
          <>
            <List key={launch.id}>
              <Link className="link" to={`/launch/${launch.id}`}>
                {launch.name}
              </Link>
              <p>{launch.status.name}</p>
            </List>
          </>
        ))}
      </ul>
      {previousOffset && (
        <Button onClick={handlePreviousClick}>Previous</Button>
      )}
      {nextOffset && <Button onClick={handleNextClick}>Next</Button>}
    </div>
  );
}
