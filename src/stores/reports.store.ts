import Projects from '@/constants/projects.enum';
import Report from '@/interfaces/report.interface';
import { setHours, setMinutes, subDays, subHours } from 'date-fns';
import create from 'zustand';

interface ReportsStore {
  reports: Report[];
  addReport(report: Report): void;
}

const now = new Date(Date.now());
const yesterday = subDays(now, 1);

const defaultReports: Report[] = [
  {
    project: Projects.PASCUAL_BRAVO,
    description: `Estudiar`,
    startDate: setHours(setMinutes(yesterday, 0), 7),
    endDate: setHours(setMinutes(yesterday, 0), 11),
    duration: {
      hours: 4,
      minutes: 0,
      seconds: 0,
    },
  },
  {
    project: Projects.MD,
    description: `Evaluación`,
    startDate: subHours(now, 5),
    endDate: subHours(now, 3),
    duration: {
      hours: 2,
      minutes: 0,
      seconds: 0,
    },
  },
];

const useReportsStore = create<ReportsStore>((set, get) => ({
  reports: defaultReports,
  addReport: (report) =>
    set({
      reports: get().reports.concat([report]),
    }),
}));

export default useReportsStore;
