import ReportHeadRow from '@/components/ReportHeadRow';
import Duration from '@/interfaces/duration.interface';
import ReportHead from '@/interfaces/reportHead.interface';
import AdminLayout from '@/layouts/AdminLayout';
import useReportsStore from '@/stores/reports.store';
import parseDuration from '@/utils/parseDuration';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { useEffect, useState } from 'react';

const Reports: React.FC = () => {
  const [data, setData] = useState<ReportHead[]>([]);
  const [totalDuration, setTotalDuration] = useState<Duration>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { reports } = useReportsStore();

  useEffect(() => {
    if (data.length === 0) {
      const d: ReportHead[] = [];
      const dur: Duration = { hours: 0, minutes: 0, seconds: 0 };

      reports.forEach((report) => {
        const dD = d.find((x) => x.project === report.project);
        if (dD) {
          dD.reports.push(report);
          dD.duration.hours += report.duration.hours;
          dD.duration.minutes += report.duration.minutes;
          dD.duration.seconds += report.duration.seconds;
        } else {
          d.push({
            project: report.project,
            reports: [report],
            duration: report.duration,
          });
        }

        dur.hours += report.duration.hours;
        dur.minutes += report.duration.minutes;
        dur.seconds += report.duration.seconds;
      });

      setData(d);
      setTotalDuration(dur);
    }
  }, []);

  return (
    <AdminLayout title="Reportes">
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="h6">Reportes</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right">
            Total: {parseDuration(totalDuration)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Proyecto</TableCell>
                  <TableCell align="right">Duración</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((d) => (
                  <ReportHeadRow {...d} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default Reports;
