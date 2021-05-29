import Report from '@/interfaces/report.interface';
import parseDate from '@/utils/parseDate';
import parseDuration from '@/utils/parseDuration';
import { TableCell, TableRow } from '@material-ui/core';

interface Props extends Report {
  withProject?: boolean;
}

const ReportRow: React.FC<Props> = ({
  project,
  description,
  startDate,
  endDate,
  duration,
  withProject,
}) => (
  <TableRow>
    {withProject && <TableCell>{project}</TableCell>}
    <TableCell>{description}</TableCell>
    <TableCell>{parseDate(startDate)}</TableCell>
    <TableCell>{parseDate(endDate)}</TableCell>
    <TableCell>{parseDuration(duration)}</TableCell>
  </TableRow>
);

export default ReportRow;
