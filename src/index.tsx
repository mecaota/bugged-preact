import { render, type FunctionalComponent } from 'preact';

import { lazy } from 'preact/compat';

const Empty = lazy(() => import('@components/empty'));

export const App: FunctionalComponent = () => <Empty loading />;

const target = document.getElementById('root');
target && render(<App />, target);
