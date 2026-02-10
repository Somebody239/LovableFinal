import { useState } from 'react';
import Layout from './components/layout/Layout';
import Opening from './components/Opening';
import Onboarding from './components/Onboarding';

function App() {
  // 'opening' -> 'onboarding' -> 'app'
  const [appState, setAppState] = useState<'opening' | 'onboarding' | 'app'>('opening');

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
