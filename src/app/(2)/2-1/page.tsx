import { redirect } from 'next/navigation';

export default function Page() {
  const redirectToOtherRouteGroup = async () => {
    'use server';
    redirect('/1-1');
  };

  return (
    <>
      <pre>
        Root layout: 2
        Page: 1
      </pre>
      <form action={redirectToOtherRouteGroup}>
        <button type="submit">Go to another page in the other route group (1-1) </button>
      </form>
    </>
  );
}
