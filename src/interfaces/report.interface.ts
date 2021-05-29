import Projects from '@/constants/projects.enum';
import Duration from './duration.interface';

interface Report {
  project: Projects;
  description: string;
  startDate: Date;
  endDate: Date;
  duration: Duration;
}

export default Report;
