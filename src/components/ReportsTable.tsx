import Report from '@/interfaces/report.interface';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import ReportRow from './ReportRow';

interface Props {
  reports: Report[];
  withProject?: boolean;
}

const ReportsTable: React.FC<Props> = ({ reports, withProject }) => (
  <Table>
    <TableHead>
      <TableRow>
        {withProject && <TableCell>Proyecto</TableCell>}
        <TableCell>Descripción</TableCell>
        <TableCell>Inicio</TableCell>
        <TableCell>Fin</TableCell>
        <TableCell>Duración</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {reports.map((r) => (
        <ReportRow {...r} withProject={withProject} />
      ))}
    </TableBody>
  </Table>
);

export default ReportsTable;
