import ReportHead from '@/interfaces/reportHead.interface';
import parseDuration from '@/utils/parseDuration';
import {
  Collapse,
  IconButton,
  makeStyles,
  TableCell,
  TableRow,
} from '@material-ui/core';
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from '@material-ui/icons';
import { useState } from 'react';
import ReportsTable from './ReportsTable';

const useStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: `unset`,
    },
  },
});

const ReportHeadRow: React.FC<ReportHead> = ({
  project,
  reports,
  duration,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpRounded /> : <KeyboardArrowDownRounded />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {project}
        </TableCell>
        <TableCell align="right">{parseDuration(duration)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <ReportsTable reports={reports} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ReportHeadRow;
