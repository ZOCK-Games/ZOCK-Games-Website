import { useEffect } from 'react';
import { initAuth } from '../lib/auth';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initAuth();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;