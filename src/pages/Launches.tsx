import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Launch } from '../types';
import SearchBar from '../components/SearchBar/SearchBar';
import { Button } from '../components/Button/Button';
import { ListItem } from '../components/ListItem/ListItem';
import { List } from '../components/List/List';
import { Container } from '../components/Container/Container';

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
    <Container>
      <SearchBar onSearch={handleSearch} />
      <List>
        {launches.map((launch) => (
          <>
            <ListItem key={launch.id}>
              <Link className="link" to={`/launch/${launch.id}`}>
                {launch.name}
              </Link>
            </ListItem>
          </>
        ))}
      </List>
      <div className="buttonContainer">
        <Button
          onClick={handlePreviousClick}
          className={previousOffset ? 'buttonPaging' : 'buttonHide'}
        >
          Previous
        </Button>
        <Button
          onClick={handleNextClick}
          className={nextOffset ? 'buttonPaging' : 'buttonHide'}
        >
          Next
        </Button>
      </div>
    </Container>
  );
}
