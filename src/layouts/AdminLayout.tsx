import useTimeStore from '@/stores/time.store';
import parseDuration from '@/utils/parseDuration';
import {
  AppBar,
  Button,
  colors,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { AccessTime, BarChart } from '@material-ui/icons';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  container: {
    display: `flex`,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 250,
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

interface Props {
  title: string;
  children: React.ReactNode;
}

const AdminLayout: React.FC<Props> = ({ title, children }) => {
  const classes = useStyles();
  const router = useRouter();

  const { timer, getTotalDuration } = useTimeStore();

  return (
    <div className={classes.container}>
      <CssBaseline />
      <Head>
        {!timer ? (
          <title>Globant Timer || {title}</title>
        ) : (
          <title>{parseDuration(getTotalDuration())}</title>
        )}
      </Head>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Globant
          </Typography>
          <Button color="inherit" onClick={() => router.push(`/`)}>
            Salir
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <List>
          <ListItem
            button
            selected={router.asPath === `/admin/time`}
            onClick={() => router.push(`/admin/time`)}
          >
            <ListItemIcon>
              <AccessTime />
            </ListItemIcon>
            <ListItemText primary="Tiempo" />
          </ListItem>
          <ListItem
            button
            selected={router.asPath === `/admin/reports`}
            onClick={() => router.push(`/admin/reports`)}
          >
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary="Reportes" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
        <Typography
          variant="body2"
          align="right"
          style={{ width: `100%`, marginTop: `1rem`, color: colors.grey[500] }}
        >
          &copy; 2021 ~ Creado por Carolina Vargas, Andrés Felipe Zapata y{` `}
          Daniel Solarte.
        </Typography>
      </main>
    </div>
  );
};

export default AdminLayout;
