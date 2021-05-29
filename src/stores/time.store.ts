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

  lastDuration: Duration;
  updateLastDuration(lastDuration: Duration): void;
  currentDuration: Duration;
  incrementDuration(): void;
  clearCurrentDuration(): void;
  getTotalDuration(): Duration;
}

const useTimeStore = create<TimeStore>((set, get) => ({
  timer: null,
  updateTimer: (timer) => set({ timer }),

  currentDescription: ``,
  updateDescription: (currentDescription) => set({ currentDescription }),

  currentProject: null,
  updateProject: (currentProject) => set({ currentProject }),

  startDate: null,
  updateStartDate: (startDate) => set({ startDate }),

  lastDuration: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  updateLastDuration: (lastDuration) => set({ lastDuration }),
  currentDuration: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  incrementDuration: () =>
    set(({ currentDuration }) => {
      let { hours, minutes, seconds } = currentDuration;

      if (seconds === 59) {
        seconds = 0;
        minutes += 1;
      } else seconds += 1;

      if (minutes >= 60) {
        minutes = 0;
        hours += 1;
      }

      return {
        currentDuration: {
          hours,
          minutes,
          seconds,
        },
      };
    }),
  clearCurrentDuration: () =>
    set({ currentDuration: { hours: 0, minutes: 0, seconds: 0 } }),
  getTotalDuration: () => {
    const { lastDuration, currentDuration } = get();

    return {
      hours: lastDuration.hours + currentDuration.hours,
      minutes: lastDuration.minutes + currentDuration.minutes,
      seconds: lastDuration.seconds + currentDuration.seconds,
    };
  },
}));

export default useTimeStore;
