import Projects from '@/constants/projects.enum';
import Duration from '@/interfaces/duration.interface';
import create from 'zustand';

interface TimeStore {
  timer: NodeJS.Timeout | null;
  updateTimer(timer: NodeJS.Timeout | null): void;

  currentDescription: string;
  updateDescription(currentDescription: string): void;

  currentProject: Projects | null;
  updateProject(currentProject: Projects | null): void;

  startDate: Date | null;
  updateStartDate(startDate: Date | null): void;

  currentDuration: Duration;
  updateDuration(currentDuration: Duration): void;
}

const useTimeStore = create<TimeStore>((set) => ({
  timer: null,
  updateTimer: (timer) => set({ timer }),

  currentDescription: ``,
  updateDescription: (currentDescription) => set({ currentDescription }),

  currentProject: null,
  updateProject: (currentProject) => set({ currentProject }),

  startDate: null,
  updateStartDate: (startDate) => set({ startDate }),

  currentDuration: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  updateDuration: (currentDuration) => set({ currentDuration }),
}));

export default useTimeStore;
