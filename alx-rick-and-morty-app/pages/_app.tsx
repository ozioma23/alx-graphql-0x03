import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";
import * as Sentry from '@sentry/react';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

Sentry.init({
  dsn: "YOUR_SENTRY_DSN_HERE",
});

export default MyApp;







