import Link from 'next/link';
import TravelPlan from './globe';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <TravelPlan />
      </h2>
    </>
  );
}