import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ClubPage } from './pages/ClubPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { EventsPage } from './pages/EventsPage';
import { HomePage } from './pages/HomePage';
import { JoinPage } from './pages/JoinPage';
import { RankingsPage } from './pages/RankingsPage';
import { RobotPage } from './pages/RobotPage';

type RouteKey = 'home' | 'events' | 'club' | 'robot' | 'rankings' | 'join';

function getRouteParts() {
  return window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
}

function getRoute(): RouteKey {
  const [route] = getRouteParts();

  if (route === 'events' || route === 'club' || route === 'robot' || route === 'rankings' || route === 'join') {
    return route;
  }

  return 'home';
}

function renderPage(route: RouteKey) {
  const [, slug] = getRouteParts();

  switch (route) {
    case 'events':
      return slug ? <EventDetailPage slug={slug} /> : <EventsPage />;
    case 'club':
      return <ClubPage />;
    case 'robot':
      return <RobotPage />;
    case 'rankings':
      return <RankingsPage />;
    case 'join':
      return <JoinPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash || '#/');
  const route = getRoute();

  useEffect(() => {
    function handleHashChange() {
      setHash(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Header />
      <div key={hash}>{renderPage(route)}</div>
      <Footer />
    </>
  );
}
