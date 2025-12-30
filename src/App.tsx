import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentScheduler from './components/AppointmentScheduler';
import HomePage from './pages/HomePage';
import ProvidersPage from './pages/ProvidersPage';
import mountainsBackground from './assets/mountains_background.webp';

function App() {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'providers':
        return <ProvidersPage onScheduleClick={() => setIsSchedulerOpen(true)} />;
      case 'home':
      default:
        return <HomePage onScheduleClick={() => setIsSchedulerOpen(true)} />;
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${mountainsBackground})` }}
    >
      <Header
        onScheduleClick={() => setIsSchedulerOpen(true)}
        currentPage={currentPage}
      />
      {renderPage()}
      <Footer />
      <AppointmentScheduler
        isOpen={isSchedulerOpen}
        onClose={() => setIsSchedulerOpen(false)}
      />
    </div>
  );
}

export default App;
