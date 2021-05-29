import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import '@/styles/global.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" type="image/png" href="/globant-icon.png" />
    </Head>
    <Component {...pageProps} />
    <ToastContainer position="top-right" />
  </>
);

export default MyApp;
