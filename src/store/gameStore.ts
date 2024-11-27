import { create } from 'zustand';
import type { Task, Room, Character } from '../types/game';

interface GameState {
  currentScreen: 'start' | 'tutorial' | 'game' | 'achievements';
  characters: Character[];
  rooms: Room[];
  tasks: Task[];
  points: number;
  setScreen: (screen: GameState['currentScreen']) => void;
  completeTask: (taskId: string) => void;
  unlockRoom: (roomId: string) => void;
  unlockCharacter: (characterId: string) => void;
}

export const useGameStore = create<GameState>((set) => ({
  currentScreen: 'start',
  characters: [],
  rooms: [],
  tasks: [],
  points: 0,
  
  setScreen: (screen) => set({ currentScreen: screen }),
  
  completeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      ),
      points: state.points + (state.tasks.find((t) => t.id === taskId)?.points || 0),
    })),
    
  unlockRoom: (roomId) =>
    set((state) => ({
      rooms: state.rooms.map((room) =>
        room.id === roomId ? { ...room, unlocked: true } : room
      ),
    })),
    
  unlockCharacter: (characterId) =>
    set((state) => ({
      characters: state.characters.map((character) =>
        character.id === characterId ? { ...character, unlocked: true } : character
      ),
    })),
}));