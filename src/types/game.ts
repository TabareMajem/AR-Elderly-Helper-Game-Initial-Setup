export type Task = {
  id: string;
  title: string;
  description: string;
  room: Room;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completed: boolean;
  points: number;
};

export type Room = {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
  unlocked: boolean;
};

export type Character = {
  id: string;
  name: string;
  description: string;
  model: string;
  unlocked: boolean;
};