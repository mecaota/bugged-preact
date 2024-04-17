import { render, type FunctionalComponent } from 'preact';

import { Empty } from '@components/empty';

export const App: FunctionalComponent = () => <Empty loading />;

const target = document.getElementById('root');
target && render(<App />, target);
