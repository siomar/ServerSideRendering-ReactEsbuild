import React,{ Suspense, lazy, useEffect } from "react";

import Html from "./Html";
import { ErrorBoundary } from "react-error-boundary";
const Content = lazy(() => import('./Content'));

const App = ({ assets, title  }) => {
  return (
    <Html assets={assets} title={title}>
      <Suspense fallback={<h2>Carregando...</h2>}>
        <ErrorBoundary FallbackComponent={Error}>
          <Content />
        </ErrorBoundary>
      </Suspense>
    </Html>
  );
};

function Error({ error }) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>{error.stack}</pre>
    </div>
  );
}

export default App;
