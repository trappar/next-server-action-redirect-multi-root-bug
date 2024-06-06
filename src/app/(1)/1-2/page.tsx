import { redirect } from 'next/navigation';

export default function Page() {
  const redirectToSameRouteGroup = async () => {
    'use server';
    redirect('/1-1');
  };

  const redirectToOtherRouteGroup = async () => {
    'use server';
    redirect('/2-1');
  };

  return (
    <>
      <pre>
        Root layout: 1
        Page: 2
      </pre>
      <form action={redirectToSameRouteGroup}>
        <button type="submit">Go to another page in the same route group (1-1)</button>
      </form>
      <form action={redirectToOtherRouteGroup}>
        <button type="submit">Go to another page in the other route group (2-1) </button>
      </form>
    </>
  );
}
