import { Link, Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <Header>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/launch">Rocket Launches</Link>
          </li>
        </Header>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
