import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Home, Book, Trophy, Settings } from 'lucide-react';

export const StartScreen = () => {
  const setScreen = useGameStore((state) => state.setScreen);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Elderly Helper
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={() => setScreen('game')}
            className="w-full flex items-center justify-between px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors"
          >
            <span className="text-lg font-semibold">Start Helping</span>
            <Home className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => setScreen('tutorial')}
            className="w-full flex items-center justify-between px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors"
          >
            <span className="text-lg font-semibold">Tutorial</span>
            <Book className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => setScreen('achievements')}
            className="w-full flex items-center justify-between px-6 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition-colors"
          >
            <span className="text-lg font-semibold">Achievements</span>
            <Trophy className="w-6 h-6" />
          </button>
          
          <button
            className="w-full flex items-center justify-between px-6 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-xl transition-colors"
          >
            <span className="text-lg font-semibold">Settings</span>
            <Settings className="w-6 h-6" />
          </button>
        </div>
        
        <p className="text-center text-gray-600 mt-6">
          Help virtual elderly characters with daily tasks in AR
        </p>
      </div>
    </div>
  );
};