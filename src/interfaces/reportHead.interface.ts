import Projects from '@/constants/projects.enum';
import Duration from './duration.interface';
import Report from './report.interface';

interface ReportHead {
  project: Projects;
  reports: Report[];
  duration: Duration;
}

export default ReportHead;
