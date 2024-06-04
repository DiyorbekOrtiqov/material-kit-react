import { Suspense } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';

import { CircularProgress } from '@mui/material';

import App from './app';
import store from './redux/store';

// ----------------------------------------------------------------------

const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <HelmetProvider>
        <BrowserRouter>
          <Suspense
            fallback={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                }}
              >
                <CircularProgress />
              </div>
            }
          >
            <App />
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  </Provider>
);
