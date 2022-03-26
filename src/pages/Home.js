import { LastPost } from './../components/LastPost/index';
import { LastTwoPosts } from './../components/LastTwoPosts/index';

export function Home() {
  return (
    <>
      <LastPost />
      <LastTwoPosts/>
    </>
  );
}
