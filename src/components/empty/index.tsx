import { type FunctionalComponent } from 'preact';

type Props = {
  loading?: boolean;
};

export const Empty: FunctionalComponent<Props> = ({ loading = false }) => {
  return <div>{loading && <p>This is lazy Component</p>}</div>;
};
