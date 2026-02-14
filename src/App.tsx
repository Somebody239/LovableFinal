import { useState } from 'react';
import Layout from './components/layout/Layout';
import Opening from './components/Opening';
import Onboarding from './components/Onboarding';
import Presentation from './components/Presentation';

function App() {

  // 'opening' -> 'onboarding' -> 'app'
  const [appState, setAppState] = useState<'opening' | 'onboarding' | 'app'>('opening');

  // Check for presentation mode
  if (window.location.pathname === '/presentation') {
    return <Presentation />;
  }

  if (appState === 'opening') {
    return <Opening onComplete={() => setAppState('onboarding')} />;
  }

  if (appState === 'onboarding') {
    return <Onboarding onComplete={() => setAppState('app')} />;
  }

  return (
    <Layout />
  );
}

export default App;
