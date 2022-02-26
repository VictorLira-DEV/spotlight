import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../src/components/layoult/Layout';
import SearchPageProvider from '../src/context/searchMovieinput';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {

  const theme = {
    dark: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333',
    },
    desktop: '1200px',
    laptop: '1024px',
    tablet: '768px',
    phone: '480px',
  };

  return (
    <ThemeProvider theme={theme}>
      <SearchPageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchPageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
