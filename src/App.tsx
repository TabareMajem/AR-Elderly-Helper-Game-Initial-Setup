import React from 'react';
import { StartScreen } from './components/StartScreen';
import { useGameStore } from './store/gameStore';

function App() {
  const currentScreen = useGameStore((state) => state.currentScreen);

  return (
    <div className="min-h-screen bg-gray-100">
      {currentScreen === 'start' && <StartScreen />}
      {/* Other screens will be added as we develop them */}
    </div>
  );
}

export default App;