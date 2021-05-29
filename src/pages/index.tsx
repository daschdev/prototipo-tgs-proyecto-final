import Logo from '@/components/Logo';
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const useStyles = makeStyles({
  container: {
    minHeight: `100vh`,
    padding: `0 4px`,
  },
  gridContainer: {
    minHeight: `100vh`,
  },
});

const SignIn: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    toast.warning(`Solo presiona el botón de ingresar.`);
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>Globant Timer || Inicia sesión</title>
      </Head>
      <Grid
        container
        spacing={1}
        className={classes.gridContainer}
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item md={5}>
          <img
            src="/images/undraw_Sign_in_re_o58h.svg"
            alt="Sign In"
            width="100%"
          />
        </Grid>
        <Grid item md={3}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={10}>
              <Logo />
            </Grid>
            <Grid item>
              <Typography variant="h4">Inicia sesión</Typography>
            </Grid>
            <Grid item xs={12}>
              <form>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nombre de usuario"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Contraseña"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => router.push(`/admin`)}
                    >
                      Ingresar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
