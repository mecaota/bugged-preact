import { render, type FunctionalComponent } from 'preact';

import { Suspense, lazy } from 'preact/compat';

const Empty = lazy(() => import('@components/empty'));

export const App: FunctionalComponent = () => (
  <div>
    <Suspense fallback={<p>now loading</p>}>
      <Empty loading />
    </Suspense>
  </div>
);

const target = document.getElementById('root');
target && render(<App />, target);
